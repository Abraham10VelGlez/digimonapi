FROM node:22-alpine

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "node" , "yarn dev" ]


