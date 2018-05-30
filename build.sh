#!/bin/bash

cd /home/appuser/app
DIST_DIRECTORY=/usr/share/nginx/html npm run build
nginx -g "daemon off;"