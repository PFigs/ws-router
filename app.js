// Author: Pedro Silva
// License: MIT

var fs = require('fs');
var http = require('http');
var https = require('https');
var logger = require('./vars/log.js');
var express = require('express');
var app = express();
var serve_at = process.env.SERVE_AT || 3000;

// handles https or http server creation
if(process.env.SERVE_HTTPS == 'https')
{
    var ssl_options =
    {
        key: fs.readFileSync('./keys/server.key'),
        cert: fs.readFileSync('./keys/server.crt'),
        ca: fs.readFileSync('./keys/ca.crt')
    };
    var server = https.createServer(ssl_options, app);
}
else
{
    var server = http.createServer(app);
}

var expressWs = require('express-ws')(app, server);

// imports routes and starts serving
app.use(require('./routes/websocket.js'));
server.listen(serve_at, function()
{
    logger.info('WS router listening on port ' + serve_at);
}
);
