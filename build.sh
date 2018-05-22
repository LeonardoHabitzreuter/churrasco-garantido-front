#!/bin/bash

cd /home/appuser/app
npm run build
rm -r /home/appuser/app
nginx -g "daemon off;"