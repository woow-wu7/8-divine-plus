# 编译阶段
FROM node:17.6
MAINTAINER woow_wu7
COPY . /app/
WORKDIR /app
RUN npm install
RUN npm run docs:dev
