FROM node:12.18-alpine

RUN mkdir -p /app

WORKDIR /app

VOLUME [ "/app" ]

RUN yarn global add gatsby-cli

CMD [ "gatsby", "develop" ]