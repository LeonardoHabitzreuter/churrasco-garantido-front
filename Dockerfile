FROM nginx:1.13-alpine
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
ENV API_URL=http://0.0.0.0:3001 DIST_DIRECTORY=/usr/share/nginx/html
RUN addgroup -g 9999 appgroup && \
    adduser -u 9999 -G appgroup -D appuser && \
    mkdir /home/appuser/app && \
    chown appuser:appgroup /home/appuser/app && \
    chmod -R 777 /home/appuser
COPY --chown=appuser:appgroup package.json /home/appuser/app/package.json
COPY --chown=appuser:appgroup .babelrc /home/appuser/app/.babelrc
COPY --chown=appuser:appgroup build.sh build.sh
COPY --chown=appuser:appgroup webpack /home/appuser/app/webpack
COPY --chown=appuser:appgroup public /home/appuser/app/public
COPY --chown=appuser:appgroup src /home/appuser/app/src
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN apk add --update nodejs && \
    chmod -R 777 /usr/share/nginx/html && \
    chmod -R 777 /var/cache/nginx && \
    chmod -R 777 /var/run
USER appuser
RUN cd /home/appuser/app && \
    npm install && \
    chmod -R 777 /home/appuser/app/webpack && \
    chmod -R 777 /home/appuser/app/public && \
    chmod -R 777 /home/appuser/app/src && \
    chmod -R 777 /home/appuser/app/node_modules
ENV NODE_ENV production
EXPOSE 3000
CMD sh build.sh