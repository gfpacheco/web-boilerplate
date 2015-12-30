const path = require('path');

module.exports = {
  entry: {
    app: './app/app.js',
    styles: './app/styles/styles.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};
