const { resolve } = require('path')
// const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

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
      exclude: resolve(__dirname, 'node_modules')
    }]
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    // new ModuleConcatenationPlugin()
  ]
}