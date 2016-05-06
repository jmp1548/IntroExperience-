var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app);

server.listen(process.env.NODE_PORT || 3000);

// serve public directory where angular app lives
app.use('/', express.static(__dirname + '/app'));
