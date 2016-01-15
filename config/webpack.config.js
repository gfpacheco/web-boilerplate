const path = require('path');
const webpack = require('webpack');

const defaults = {
  entry: {
    app: './app/app.js',
  },
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
};

const development = Object.assign({}, defaults, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: Object.keys(defaults.entry).reduce((entry, key) => {
    entry[key] = ['webpack-hot-middleware/client', defaults.entry[key]]; // eslint-disable-line
    return entry;
  }, {}),
  plugins: [
    ...defaults.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});

const production = Object.assign({}, defaults, {
  plugins: [
    ...defaults.plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
      },
    }),
  ],
});

module.exports = function webpackConfig(environment) {
  return environment.isProduction ? production : development;
};
