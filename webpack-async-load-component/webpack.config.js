const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
    filename: '[name]_[hash:8].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory'],
      exclude: resolve(__dirname, 'node_modules')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8888
  }
}