const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require("paths");

module.exports = (env, args) => {
  const mode = args.mode;
  const isProd = mode === "production";
  return {
    entry: {
      index: "./src/index.js"
    },
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js",
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
          test: /\.css$/,
          use: isProd
            ? [MiniCssExtractPlugin.loader, "css-loader"]
            : ["style-loader", "css-loader"],
          exclude: /node_modules/
        }
      ]
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
