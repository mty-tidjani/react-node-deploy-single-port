FROM node:12.2.0-alpine

USER root

WORKDIR /app

RUN npm i -g pm2 typescript


## Install client dependencies
WORKDIR /app/server/
COPY ./server/package*.json ./
RUN npm i

# Build server
COPY ./server .
RUN npm run build


## Install client dependencies
WORKDIR /app/client/
COPY ./client/package*.json ./
RUN npm i

# Build client
COPY ./client .
RUN npm run build
RUN mv ./build ../server/clientbuild


## Run app
WORKDIR /app/server/

EXPOSE 4000

CMD ["pm2-runtime", "--port", "4000", "src/app.js"]
