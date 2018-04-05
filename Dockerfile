FROM node
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
ENV API_URL=http://localhost:3002 NODE_ENV=production
COPY package.json /app/package.json
WORKDIR /app
RUN npm install --only=production
COPY dist dist
EXPOSE 3000