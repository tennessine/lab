const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]_[hash:8].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory'],
      exclude: [ resolve(__dirname, 'node_modules') ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  }
}