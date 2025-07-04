FROM node:alpine
COPY . /docker-test
WORKDIR /docker-test
CMD node index.js