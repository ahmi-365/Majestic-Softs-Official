import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment
  output: 'export',
  trailingSlash: true, // Ensures compatibility with shared hosting
  
  webpack: (config) => {
    // Add a polyfill for `process` in the browser environment
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    );
    return config;
  },
};

export default nextConfig;
