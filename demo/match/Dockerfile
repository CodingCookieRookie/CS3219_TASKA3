FROM node:12
WORKDIR /usr/src/match
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5010
CMD ["node", "index.js"]