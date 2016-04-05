var app = require('express')();
var api = require('./lib/index');

var PORT = process.env['PORT'] || 8080;

api.init(app, {
  repoDir: process.env['REPODIR'],
  installMiddleware: true
});
app.listen(PORT);
console.log('Listening on', PORT);
