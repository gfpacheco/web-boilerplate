const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./config');

const webpackCompiler = webpack(config.webpack);
const app = express();
const port = process.env.PORT || 5000;

const pack = callback => {
  return new Promise((resolve, reject) => {
    console.info('Packing things up...');
    webpackCompiler.run((err, stats) => {
      err = err || stats.compilation.errors[0];
      err ? reject(err) : resolve()
    });
  });
};

const listen = () => {
  return new Promise((resolve, reject) => {
    console.info('Configuring middlewares...');
    if (config.environment.isDevelopment) {
      app.use(require('webpack-dev-middleware')(webpackCompiler, {
        noInfo: true,
        publicPath: config.webpack.output.publicPath
      }));
      app.use(require('webpack-hot-middleware')(webpackCompiler));
    }

    app.use(express.static('build'));
    app.use(express.static('app/public'));

    console.info('Configuring routes...');
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'app/public/index.html'));
    });

    console.info('Starting server...');
    app.listen(port, err => {
      err ? reject(err) : resolve(port)
    });
  });
};

pack()
  .then(listen)
  .then(port => {
    console.info('Server up and listening port %s', port);
  }).catch(err => {
    console.error(err);
  })
