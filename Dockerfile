FROM mhart/alpine-node:10

WORKDIR /src

RUN apk add --update tzdata
ENV TZ=America/Sao_Paulo
RUN rm -rf /var/cache/apk/*

COPY package.json /src
RUN npm install --production
ADD . .

EXPOSE 80

CMD ["npm", "start"]
