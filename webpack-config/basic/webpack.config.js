const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");


const paths = require("../../paths");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: paths.appBuild
  },
  mode: 'production',
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
        use: ['style-loader','css-loader']
      }
    ]
  },
  devtool: "cheap-source-map", 
  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: './public/index.html'
    })
  ]
};
