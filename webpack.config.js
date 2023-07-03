const webpack = require('webpack');

module.exports = {
  // Your webpack configuration goes here
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
