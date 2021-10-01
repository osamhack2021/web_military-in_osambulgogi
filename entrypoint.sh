#!/bin/sh

mkdir -p /data/log

# TODO: ssl setup

# TODO: migrate db with prisma-migrate

nginx -c /app/nginx.conf

pm2-runtime start /app/ecosystem.config.js --env production
