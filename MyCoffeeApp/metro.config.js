const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Resim uzantıları
  'jpg',
  'jpeg',
  'png',
  'gif'
);

module.exports = config; 