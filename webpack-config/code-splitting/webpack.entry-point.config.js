const webpack = require('webpack');

const paths = require('../../paths');

module.exports = {
    entry: {
     index: './src/index.js',
     app: './src/app.js'
    },
    devtool: "cheap-source-map",
    output: {
      filename: "[name].[chunkhash].bundle.js",
      path: paths.appBuild
    }
  };
  