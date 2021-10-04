#!/bin/sh

mkdir -p /data/log

# TODO: ssl setup

cd /app/backend
yarn prisma migrate deploy
yarn prisma db seed

nginx -c /app/nginx.conf

pm2-runtime start /app/ecosystem.config.js --env production
