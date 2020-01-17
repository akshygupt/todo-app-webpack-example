const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const paths = require("paths");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: paths.appBuild
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./public/index.html"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
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
