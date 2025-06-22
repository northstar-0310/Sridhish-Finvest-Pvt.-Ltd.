/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Image optimization
  images: {
    unoptimized: true,
  },
  // Disable type checking and linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Webpack configuration
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Disable React Strict Mode for static export
  reactStrictMode: false,
  // Disable source maps to avoid memory issues
  productionBrowserSourceMaps: false,
  // Disable minification to prevent build errors
  swcMinify: false
}

module.exports = nextConfig;
