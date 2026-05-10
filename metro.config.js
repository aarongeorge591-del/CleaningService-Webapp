/**
 * Cleaning Service App - Metro Configuration
 * Bundler configuration for React Native
 */

const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

// Add asset extensions for images and fonts
config.resolver.assetExts.push(
  // Add any additional asset extensions if needed
);

// Add source extensions for TypeScript/JavaScript
config.resolver.sourceExts.push('jsx', 'js', 'ts', 'tsx', 'json');

module.exports = config;
