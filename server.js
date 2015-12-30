const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const pack = callback => {
  console.info('Packing things up...');
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      err = err || stats.compilation.errors[0];
      err ? reject(err) : resolve()
    });
  });
};

const listen = () => {
  console.info('Starting server...');
  return new Promise((resolve, reject) => {
    const app = express();
    const port = process.env.PORT || 5000;

    app.use(express.static('build'));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });

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
