#!/bin/sh

version=${1:-'latest'}
git tag -a ${version} -m ${version}
git push origin --tags
docker image build -t leonardohabitzreuter/churrasco-garantido-frontend:${version} .
docker image push leonardohabitzreuter/churrasco-garantido-frontend:${version}
