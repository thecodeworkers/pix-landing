FROM node:12.18 as build-stage

RUN apt-get update
RUN apt-get install python

RUN mkdir -p /app

WORKDIR /app

VOLUME [ "/app" ]

RUN yarn global add gatsby-cli

CMD [ "gatsby", "develop" ]