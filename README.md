# ws-router

This repository contains a node application that acts as a websocket router, whose purpose it
to forward any message it receives on *ip:port/push* to any client connected to *ip:port:/subscribe*.



Pre-requisites
==============
- Node
- npm

Install
=======
Clone the repository, checkout a release tag and install the package locally or globally (-g) with

```shell
    npm [-g] install
```

Usage
=====

Start the application through npm

```shell
    npm start
```

or with node


```shell
    node app.js
```

The websocket router will be listening for connections on port 3000 (default).


You can change router's port and transport by setting the following environment parameters prior to starting it:

-   SERVE_AT : Port where https or http server will be located

-   SERVE_HTTPS: Starts https server instead of http (requires key and ceritificate)


Routing data
============
The point of this simple server is to *forward* data to all the clients that are *subscribed* to the service.

If you want to receive data, connect to the subscribe route:

> ws://<server_ip>:<server_port>/subscribe

If you want to share data, send messages to the push route:

> ws://<server_ip>:<server_port>/push

Messages arriving at */push* will be forwarded to all clients.



Running on Docker
=================

A multi-architecture image is available from dockerhub's registry pfigs/ws-router.

Run the server on port 3000 (default) by calling the convenience script

```shell
   ./container/run.sh
```

You can set a different port by specifying it as an argument to the script's call

```shell
   ./container/run.sh <port number>
```

You can also [build the image locally][here_docker_build] (requires docker's buildx).


[here_docker_build]: https://github.com/PFigs/ws-router/blob/master/container/build.sh

