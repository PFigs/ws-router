# Author
#   Pedro Silva

FROM node:16.11-alpine

# Default port
EXPOSE 3000

# Copy code and update configuration
COPY . /home/ws-router/
WORKDIR /home/ws-router/
RUN npm install
CMD node app.js
