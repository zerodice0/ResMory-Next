const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `prefix_${hash}`
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);