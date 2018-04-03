FROM node
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
ENV API_URL=http://localhost:3002 NODE_ENV=production
COPY . /app
WORKDIR /app
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "run", "build" ]