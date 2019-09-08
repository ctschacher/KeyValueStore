FROM node:9

# working directory for application
WORKDIR /usr/src/app

# Install app dependencies (package.json and package-lock.json)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# App binds to port 8080
EXPOSE 8080

# run the web server app
CMD [ "npm", "start" ]
