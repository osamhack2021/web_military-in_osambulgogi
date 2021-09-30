FROM node:16-alpine3.14

ADD . /app

RUN apk add --no-cache nginx

ENTRYPOINT /app/entrypoint.sh
