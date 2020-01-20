const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var paths = require("../../paths");

module.exports = (env, args) => {
  const mode = args.mode;
  const isProd = mode === "production";
  return {
    entry: {
      index: "./src/index.es5.js"
    },
    output: {
      filename: "[name].[chunkhash].es5.js",
      path: paths.appBuildLegacy
    },
    mode: "production",
    module: {
      rules: [
      
        {
          test: /\.css$/,
          use: isProd
            ? [MiniCssExtractPlugin.loader, "css-loader"]
            : ["style-loader", "css-loader"],
          exclude: /node_modules/
        },
        {
          test: /\.m?jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "entry",
                    targets: {
                      browsers: ["> 1%", "last 2 versions", "Firefox ESR"]
                    },
                    corejs: "2"
                  }
                ]
              ]
            }
          }
        }
      ]
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin()],
      splitChunks: {
        chunks: "all"
      }
    },
    devtool: "source-map",
    plugins: [
      isProd &&
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
      new HtmlWebPackPlugin({
        filename: "./index.html",
        template: "./public/index.html"
      })
    ]
  };
};
