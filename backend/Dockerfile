FROM node:16

WORKDIR /app

ADD ./package.json /app

ADD ./yarn.lock /app

RUN yarn install --immutable

ADD . /app

EXPOSE 1337

CMD ["yarn", "develop"]