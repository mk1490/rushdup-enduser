FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /root/
COPY package*.json ./
RUN npm install
COPY . . skipcache
RUN ["npm", "run", "build"] skipcache
EXPOSE 8080
CMD [ "http-server", "dist" ]
