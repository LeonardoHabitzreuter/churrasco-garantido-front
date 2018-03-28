FROM node
MAINTAINER Leonardo Habitzreuter <leo.habitzreuter@gmail.com>
COPY . /app
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]