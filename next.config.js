import webpack from 'webpack';

const nextConfig = {
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
