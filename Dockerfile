FROM nginx:1.13-alpine
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
ENV API_URL=http://0.0.0.0:3002 NODE_ENV=production
COPY dist /usr/share/nginx/html
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80