const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: '//somecdn.com'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['comment-require-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.scss$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [new HtmlWebpackPlugin({template: './template.html', filename: 'index.html'})],
  devServer: {
    host: 'localhost',
    port: 3000
  }
}