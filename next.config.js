/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static optimization for all pages
  generateBuildId: async () => 'build',
  // Disable image optimization API
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

// Create a simple image loader
const fs = require('fs');
if (!fs.existsSync('./image-loader.js')) {
  fs.writeFileSync(
    './image-loader.js',
    'export default function loader({ src }) { return src; }',
    'utf8'
  );
}

module.exports = nextConfig;
