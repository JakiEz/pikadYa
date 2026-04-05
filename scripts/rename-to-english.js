/**
 * Renames all Thai-named image files to English transliterations.
 * Also updates utils/imageMap*.ts and data/medicine.json references.
 *
 * To undo everything: node scripts/rename-to-thai.js
 */

const fs   = require('fs');
const path = require('path');

const ROOT        = path.join(__dirname, '..');
const ASSETS_DIR  = path.join(ROOT, 'assets', 'images');
const UTILS_DIR   = path.join(ROOT, 'utils');
const MEDICINE    = path.join(ROOT, 'data', 'medicine.json');
const LOG_FILE    = path.join(__dirname, 'rename-log.json');
const MAPPING     = require('./rename-mapping.json');

// Longest first — prevents "ทองโหลง.jpg" matching inside "รากทองโหลง.jpg"
const pairs = Object.entries(MAPPING).sort((a, b) => b[0].length - a[0].length);

// ─── Step 1: Rename image files ───────────────────────────────────────────
const log = [];

function scanAndRename(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAndRename(full);
    } else if (MAPPING[entry.name]) {
      const newFull = path.join(dir, MAPPING[entry.name]);
      fs.renameSync(full, newFull);
      log.push({ from: full, to: newFull });
      console.log(`  ${entry.name}  →  ${MAPPING[entry.name]}`);
    }
  }
}

console.log('\n── Renaming files ──');
scanAndRename(ASSETS_DIR);
fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), 'utf8');
console.log(`\n  ${log.length} files renamed. Log saved to scripts/rename-log.json`);

// ─── Step 2: Update utils/imageMap*.ts ────────────────────────────────────
console.log('\n── Updating imageMap files ──');
for (const f of fs.readdirSync(UTILS_DIR).filter(f => f.endsWith('.ts'))) {
  const filePath = path.join(UTILS_DIR, f);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [thai, english] of pairs) content = content.split(thai).join(english);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('  updated:', f);
}

// ─── Step 3: Update data/medicine.json ────────────────────────────────────
console.log('\n── Updating medicine.json ──');
let medicine = fs.readFileSync(MEDICINE, 'utf8');
for (const [thai, english] of pairs) medicine = medicine.split(thai).join(english);
fs.writeFileSync(MEDICINE, medicine, 'utf8');
console.log('  updated: medicine.json');

console.log('\n✓ Done. To undo: node scripts/rename-to-thai.js\n');
