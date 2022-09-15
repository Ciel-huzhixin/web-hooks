#!/bin/bash
cd /usr/code/web-app/
git clean -f
git reset --hard
rm -rf /usr/share/nginx/html/dist
rm -rf dist
npm run build
cp dist /usr/share/nginx/html
