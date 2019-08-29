#!/usr/bin/env bash
# Author
# Pedro Silva

ARCH=${ARCH:-"x86"}
PORT=${PORT:-3000}

docker run -d --name ws-router \
              -p "${PORT}:${PORT}" \
              pfigs/ws-router:latest
