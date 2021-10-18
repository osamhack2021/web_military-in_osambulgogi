#!/bin/sh

mkdir -p /data/log /data/ssl

if [ ! -f "/data/ssl/server.key" ]; then
    openssl req -x509 -newkey rsa:2048 -nodes -keyout /data/ssl/server.key -out /data/ssl/server.crt \
    -subj /C=KR/ST=Seoul/L=Seoul/O=OSAMHACK2021/OU=OSAMBULGOGI/CN=military-in -days 1000
fi

until pg_isready --username=$POSTGRES_USER --host=military-in-db; do
    echo "$(date) - waiting for db container..."
    sleep 1;
done;

cd /app/WEB(BE)
yarn prisma migrate deploy
yarn prisma db seed

nginx -c /app/nginx.conf

pm2-runtime start /app/ecosystem.config.js --env production
