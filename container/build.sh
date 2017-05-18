#!/bin/bash
# Author
# Pedro Silva

rm -rf ./ws-router/
git clone -b master --single-branch .. ws-router
rm -rf ./ws-router/.git
rm -rf ./ws-router/container
docker build -t ws-router:latest .
echo 'done'

