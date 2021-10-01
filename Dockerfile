FROM node:16-alpine3.14

COPY . /app

RUN apk add --no-cache nginx \
    && yarn --cwd /app/backend install \
    && yarn --cwd /app/frontend install \
    && yarn --cwd /app/frontend build \
    && yarn global add pm2

ENTRYPOINT /app/entrypoint.sh
