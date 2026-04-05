/**
 * Reverts all image files back to their original Thai names.
 * Restores utils/imageMap*.ts and data/medicine.json references.
 *
 * Requires scripts/rename-log.json (created by rename-to-english.js).
 */

const fs   = require('fs');
const path = require('path');

const ROOT      = path.join(__dirname, '..');
const UTILS_DIR = path.join(ROOT, 'utils');
const MEDICINE  = path.join(ROOT, 'data', 'medicine.json');
const LOG_FILE  = path.join(__dirname, 'rename-log.json');
const MAPPING   = require('./rename-mapping.json');

if (!fs.existsSync(LOG_FILE)) {
  console.error('No rename-log.json found. Run rename-to-english.js first.');
  process.exit(1);
}

// Invert mapping: english → thai
const reverse = Object.fromEntries(
  Object.entries(MAPPING).map(([thai, eng]) => [eng, thai])
);

// Longest first
const pairs = Object.entries(reverse).sort((a, b) => b[0].length - a[0].length);

// ─── Step 1: Rename files back ────────────────────────────────────────────
const log = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));

console.log('\n── Reverting file names ──');
// Reverse order so directories are restored consistently
for (const { from, to } of [...log].reverse()) {
  if (fs.existsSync(to)) {
    fs.renameSync(to, from);
    console.log(`  ${path.basename(to)}  →  ${path.basename(from)}`);
  } else {
    console.warn(`  SKIP (not found): ${to}`);
  }
}

// ─── Step 2: Revert utils/imageMap*.ts ────────────────────────────────────
console.log('\n── Reverting imageMap files ──');
for (const f of fs.readdirSync(UTILS_DIR).filter(f => f.endsWith('.ts'))) {
  const filePath = path.join(UTILS_DIR, f);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [eng, thai] of pairs) content = content.split(eng).join(thai);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('  reverted:', f);
}

// ─── Step 3: Revert data/medicine.json ────────────────────────────────────
console.log('\n── Reverting medicine.json ──');
let medicine = fs.readFileSync(MEDICINE, 'utf8');
for (const [eng, thai] of pairs) medicine = medicine.split(eng).join(thai);
fs.writeFileSync(MEDICINE, medicine, 'utf8');
console.log('  reverted: medicine.json');

console.log('\n✓ Done. All Thai names restored.\n');
