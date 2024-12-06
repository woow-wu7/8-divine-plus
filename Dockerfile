FROM node
LABEL maintainer="woow_wu7"
LABEL version="1.0"
ENV WORK_PATH /app
COPY . $WORK_PATH
WORKDIR $WORK_PATH
RUN npm install
RUN npm run docs:build

FROM nginx
COPY --from=0 /app/docs/.vuepress/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
