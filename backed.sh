#!/bin/bash

cd /usr/code/web-server/
#!/bin/bash
pm2 delete server
git clean -f
git reset --hard
git pull origin master
pm2 start index.js -n server


