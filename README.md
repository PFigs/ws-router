# ws-router
Simple websocket server to route traffic from one host to another.

Setup
=====
Start by installing the necessary modules with::

> npm install

There are two environment variables that you can define to change the server behavior, SERVE_AT and SERVE_HTTPS.

SERVE_AT : Port where https or http server will be located
SERVE_HTTPS: Starts https server instead of http (requires key and ceritificate)

Launch the process by::

> node app.js

Routing data
============
The point of this simple server is to /push data to all the clients that have /subscribed to the service.

Credits
=======
Pedro Silva