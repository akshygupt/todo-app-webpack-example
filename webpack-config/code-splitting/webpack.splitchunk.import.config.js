const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("paths");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: paths.appBuild
  },
  devtool: "cheap-source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};

// the default config

// splitChunks: {
//   chunks: "all",
//   cacheGroups: {
//     vendors: {
//       test: /[\\/]node_modules[\\/]/,
//       priority: -10
//     },
//     default: {
//       minChunks: 2,
//       priority: -20,
//       reuseExistingChunk: true
//     }
//   }
// }

// utils cachce groups
// cacheGroups: {
//   utilities: {
//     test: /[\\/]src[\\/]utilities[\\/]/,
//     minSize: 0
//   }
// }
