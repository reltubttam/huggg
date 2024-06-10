FROM node:alpine

WORKDIR /dist

COPY . .

CMD npm run db:migrate