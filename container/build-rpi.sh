#!/bin/bash
# Author
# Pedro Silva

rm -rf ./ws-router/
git clone -b master --single-branch .. ws-router
rm -rf ./ws-router/.git
rm -rf ./ws-router/container
docker build -f Dockerfile.rpi -t ws-router:rpi .
echo 'done'

