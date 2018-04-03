FROM node
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
ENV API_URL http://localhost:3002
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]