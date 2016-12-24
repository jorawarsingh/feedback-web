var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var webpack = require("webpack");
var commonConfig = require('./webpack.common.js');
//plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'redirectTo': JSON.stringify('http://localhost:8080/')
      }
    }),
      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
