#!/bin/sh

imageTag=${1:-'latest'}
npm run build
docker image build -t churrasco-garantido-frontend:${imageTag} .