process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Author: Pedro Silva
var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var morgan = require('morgan');
var winston = require('winston');

var app = express();
//var expressWs = require('express-ws')(app);

var clients = [];

var serve_at = process.env.SERVE_AT | 3000

if(process.env.NODE_ENV == 'https'){
  var ssl_options = {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt'),
    ca: fs.readFileSync('./keys/server.crt')
  };
  var server = https.createServer(ssl_options, app);
  
}else{
  var server = http.createServer(app);
}

var expressWs = require('express-ws')(app, server);

// lists itself
app.ws('/subscribe', function(ws, req) {
  clients.push(ws);
});

// pushes data to clients
app.ws('/push', function(ws, req) {
  ws.on('message', function(msg) 
  {
    sendAll(msg);
  });
});

// fwds messages to all the clients that are
// currently subscribed
function sendAll (message) {
  for (var i=0; i<clients.length; i++) {
    var status = clients[i].readyState;
    if(status == 1)
    { // bounce message to client
      winston.log('info', 'posting message to client ' + i);
      clients[i].send("Message: " + message);
    }
    else if(status > 1)
    { // remove client
      winston.log('info', 'Removing client');
      clients.splice(i,1)
    }else
    { // wait for connection to establish
      winston.log('info', 'Waiting for connection');
    }    
  }
}

server.listen(serve_at, function() {
    winston.log('Express server listening on port ' + serve_at);
});
