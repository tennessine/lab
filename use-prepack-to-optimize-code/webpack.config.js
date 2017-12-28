const { resolve } = require('path')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './main.js'
  },
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
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname),
      exclude: [],
      verbose: true,
      dry: false
    }),
    new PrepackWebpackPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8888
  }
}