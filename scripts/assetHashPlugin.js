/**
 * Metro asset plugin that appends a short path-based hash to every asset name.
 *
 * Problem: Android drawable resource names are derived from the asset's file path
 * with all non-alphanumeric characters (including Thai) replaced by '_'. Two files
 * with Thai names of the same character length in the same directory produce
 * identical resource names, causing the Gradle mergeResources task to fail.
 *
 * Solution: Append a 6-character MD5 hash of the full asset path to the name.
 * This makes every resource name globally unique without touching the source files.
 */
const crypto = require('crypto');

module.exports = function assetHashPlugin(assetData) {
  // In development, Metro serves assets over HTTP using httpServerLocation + name
  // to construct the URL. Renaming here would make the URL point to a file that
  // doesn't exist on disk. Only rename for production builds (EAS / expo export).
  if (process.env.NODE_ENV === 'development') {
    return assetData;
  }

  const uniqueKey = assetData.httpServerLocation + '/' + assetData.name;
  const hash = crypto.createHash('md5').update(uniqueKey).digest('hex').slice(0, 6);
  return {
    ...assetData,
    name: `${assetData.name}_${hash}`,
  };
};
