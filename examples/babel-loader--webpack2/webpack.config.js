var path = require('path');
var HappyPack = require('../../');

module.exports = {
  entry: path.resolve(__dirname, 'lib/a.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [
    new HappyPack({
      loaders: [
        {
          path: 'babel-loader',
          query: {
            plugins: [
              'transform-runtime',
            ],
            presets: ['es2015', 'react'],
            cacheDirectory: false
          }
        }
      ],
      threads: 2
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'lib') ],
        loader: path.resolve(__dirname, '../../loader')
      }
    ]
  }
};
