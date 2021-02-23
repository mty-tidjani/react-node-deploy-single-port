#!/usr/bin/env bash
cd ./server
#yarn ## Need to to install dependencies on first lunch
rm -r ./clientbuild || true #remove previous build file


cd ../client
#yarn ## Need to to install dependencies on first lunch
yarn run build
mv ./build ../server/clientbuild

cd ../server
npm start