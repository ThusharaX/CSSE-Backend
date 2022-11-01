FROM node:16-alpine
RUN apk add --no-cache nodejs npm
WORKDIR /csse-backend
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5500
ENTRYPOINT ["yarn"]
CMD ["start"]