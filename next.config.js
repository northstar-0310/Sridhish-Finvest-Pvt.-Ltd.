/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  // Disable type checking and linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static optimization
  generateBuildId: async () => 'build',
  // Disable webpack optimizations that might cause issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Disable optimization for static export
      config.optimization.minimize = false;
      config.optimization.minimizer = [];
    }
    return config;
  },
  // Disable server components
  experimental: {
    serverComponents: false,
  },
  // Disable React Strict Mode for static export
  reactStrictMode: false,
  // Disable source maps to avoid memory issues
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig;
