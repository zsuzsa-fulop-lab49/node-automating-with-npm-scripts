FROM node:12.13-alpine

WORKDIR /src/app/

COPY . .

RUN npm install
RUN chown -R node:node ./

USER node
