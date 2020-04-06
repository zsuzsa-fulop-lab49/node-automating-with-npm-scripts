
FROM node:12

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node ./

USER node
