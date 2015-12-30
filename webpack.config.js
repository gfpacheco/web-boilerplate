const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
