FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i 

COPY . .

ADD env.example .env

EXPOSE 3333

CMD ["npm","run","dev"]