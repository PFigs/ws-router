#!/usr/bin/env bash
# Author
# Pedro Silva

set -e

MAKE_PUSH=${1:-"false"}
PLATFORM_LIST="linux/amd64,linux/arm64,linux/arm/v7"
DOCKERFILE_PATH="container/Dockerfile"
IMAGE_NAME=pfigs/ws-router:1.1.0


_PUSH=-
if [[ "${MAKE_PUSH}" == "true" ]]
then
    _PUSH="--push"
fi

echo "Building ${IMAGE_NAME} for ${PLATFORM_LIST} --> ${DOCKERFILE_PATH} [${_PUSH}]"
docker buildx build \
              --platform "${PLATFORM_LIST}" \
              -f "${DOCKERFILE_PATH}" \
              -t "${IMAGE_NAME}" \
              "${_PUSH}" \
              .

