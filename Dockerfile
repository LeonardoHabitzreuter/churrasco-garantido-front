FROM node
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
COPY . /app
WORKDIR /app
RUN npm install
ENV API_URL http://localhost:3002
EXPOSE 3000
CMD [ "npm", "start" ]