const { resolve } = require('path')
const BasicPlugin = require('./BasicPlugin')

module.exports = {
  entry: './main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new BasicPlugin({
      foo: 1,
      bar: 2.00,
      baz: `baz`
    })
  ]
}