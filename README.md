# Deploy node/react app on single domain

This project was created for [This article](https://mty-tidjani.medium.com/deploy-nodejs-react-app-on-a-single-port-domain-54a40f1abe16).

## Start project

Note the startscript.sh is a production start script. It builds react app for production.

### Clone this repo

    $ git clone https://github.com/mty-tidjani/react-node-deploy-single-port.git demo

## Start dev
you will need to terminal to run client and server in dev mode.

### client.

    $ cd ./demo/client
    $ yarn
    $ yarn start

React app should be running on  http://localhost:3000

### Server

    $ cd ./demo/server
    $ yarn
    $ yarn start

Node app should be running on http://localhost:4000


## Start prod
Give sufficient rights to startscript.sh and

    $ ./startscript.sh

## Deploy
Move your project into your server and 
    

    $ docker-compose up -d

And you got your react/node app running on one port (4000). You can now add the necessary config (nginx, apache or any other) to proxy your domain name to http://localhost:4000.


 ***Give it a star if you found it useful***