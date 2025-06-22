/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix for static export
  // basePath: '',  // Keep this empty unless you're using a subdirectory
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  // Add this for static exports
  trailingSlash: true,
}

module.exports = nextConfig;