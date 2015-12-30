var path = require('path');
var express = require('express');

var listen = function(callback) {
  console.info('Starting server...');
  var app = express();
  var port = process.env.PORT || 5000;

  app.use(express.static('.'));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(port, function(err) {
    callback(err, port);
  });
};

listen(function(err, port) {
  if (err) {
    return console.error(err);
  }

  console.info('Server up and listening port %s', port);
});
