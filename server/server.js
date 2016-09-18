var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();

middleware(app, express);

var PORT = process.env.PORT || 3000;

var server = app.listen(PORT);
console.log('TGAP+ listening on port ' + PORT);