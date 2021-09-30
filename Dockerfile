FROM node:16-alpine3.14

ADD ./backend ./frontend ./ecosystem.config.js  ./entrypoint.sh ./nginx.conf /app/

RUN apk add --no-cache nginx

ENTRYPOINT /app/entrypoint.sh
