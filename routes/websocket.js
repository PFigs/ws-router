// Author: Pedro Silva
// License: MIT

var express = require('express');
var router = express.Router();

var logger = require('../vars/log.js');
var clients = require('../vars/clients.js');


// lists itself
router.ws('/subscribe', function(ws, req)
{
    logger.info('subscribing new user');
    clients.push(ws);
});

// pushes data to clients
router.ws('/push', function(ws, req)
{
    ws.on('message', function(msg)
    {
       sendAll(msg);
    }
    );
}
);

// fwds messages to all the clients that are
// currently subscribed
function sendAll (message)
{
  for (var i=0; i<clients.length; i++)
  {
    var status = clients[i].readyState;
    if(status == 1)
    { // bounce message to client
        logger.info('posting message to client ' + i);
        clients[i].send("Message: " + message);
    }
    else if(status > 1)
    { // remove client
        logger.info('Removing client');
        clients.splice(i,1);
    }else
    { // wait for connection to establish
        logger.info('Waiting for connection');
    }
  }
}

module.exports = router;
