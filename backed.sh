#!/bin/bash

cd /usr/code/web-server/
git clean -f
git reset --hard
git pull origin master
node index.js
