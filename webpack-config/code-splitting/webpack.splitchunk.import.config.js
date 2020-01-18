const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const paths = require("paths");

module.exports = ({mode = 'production'}) => {
return ({
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: paths.appBuild
  },
  mode: mode,
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
  optimization: {
    minimize: true,
    usedExports: true, // by default in production env
   },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./public/index.html"
    })
  ]
});
}