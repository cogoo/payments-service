FROM node:10

# Create app directory
WORKDIR /usr/src

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Build app
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]