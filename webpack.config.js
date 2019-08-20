const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'index.bundle.js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ],
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  },
  {
    entry: './src/controller.js',
    output: {
      path: __dirname + '/dist',
      filename: 'controller.bundle.js'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/controller.html',
        filename: './controller.html'
      })
    ]
  },
]
