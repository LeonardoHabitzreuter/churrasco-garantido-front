#!/bin/sh

version=${1:-'latest'}
git tag -a ${version} -m ${version}
git push origin --tags
npm run build
docker image build -t leonardohabitzreuter/churrasco-garantido-frontend:${imageTag} .
docker image push leonardohabitzreuter/churrasco-garantido-frontend:${version}
