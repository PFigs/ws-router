#!/usr/bin/env bash
# Author
# Pedro Silva

PORT=${1:-3000}

docker run -d --name ws-router \
              -p "${PORT}:3000" \
              pfigs/ws-router:latest
