const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const paths = require("../../paths");

module.exports = (env, args) => {
  const mode = args.mode;
  const isProd = mode === "production";
  return {
    entry: {
      index: "./src/index.js"
    },
    output: {
      filename: "[name].[chunkhash].es6.mjs",
      path: paths.appBuildModern
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: isProd
            ? [
                {
                  loader: MiniCssExtractPlugin.loader,
                  // options: { publicPath: paths.appBuildModern }
                },
                "css-loader"
              ]
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
                      browsers: [
                        "Chrome > 60",
                        "Safari > 11",
                        "iOS > 11",
                        "Firefox >= 60"
                      ]
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
    devtool: "source-map",
    // optimize: {
    // },    
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin()],
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      isProd &&
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
      new HtmlWebPackPlugin({
        filename: "./index.html",
        template: "./public/index.html"
      }),
      new ScriptExtHtmlWebpackPlugin({
        module: ".mjs"
      })
    ]
  };
};
