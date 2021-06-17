FROM node:10-alpine

WORKDIR /usr/app
COPY package.json ./

RUN npm 

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
