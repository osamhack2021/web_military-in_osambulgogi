#!/bin/sh

APP=/app
DATA=/data

mkdir -p $DATA/log

# TODO: ssl setup

# prepare backend
yarn --cwd $APP/backend install
# TODO: migrate db with prisma-migrate

# prepare frontend
yarn --cwd $APP/frontend install
yarn --cwd $APP/frontend build
yarn --cwd $APP/frontend start

yarn global add pm2
pm2 start $APP/ecosystem.config.js
