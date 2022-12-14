FROM node:17-alpine

COPY package.json .


WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 4000

CMD ["node", "app.js"]
 