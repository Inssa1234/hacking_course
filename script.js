const HtmlWebpackPlugin = require('html-webpack-plugin');
const { minify } = require('html-minifier');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
