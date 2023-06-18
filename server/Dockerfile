FROM node:18.16.0-alpine as production

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node

COPY package*.json /tmp/app/
RUN cd /tmp/app && npm ci --only=production

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app

WORKDIR /usr/src/app
RUN cp env-example .env
RUN npm run build

CMD ["/opt/startup.sh"]