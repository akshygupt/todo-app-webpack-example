const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const TerserJSPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const paths = require("paths");

module.exports = ({mode = 'production'}) => {
  const isProd = mode === 'production';
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
      // isProd ? {
      //   test: /\.(css)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'] // extract all css in s
      // } : {
      //   test: /\.(css)$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "source-map",
  optimization: {
    // minimize: true,
    // usedExports: true, // by default in production env
    // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin()],
    // extract all css in one file
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles_all',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },
   },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./public/index.html"
    }),
  //   new MiniCssExtractPlugin({
  //     filename: 'style.css'
  // })
  ]
});
}