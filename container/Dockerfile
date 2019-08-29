# Author
#   Pedro Silva

FROM node:12.9-alpine

# Default port
EXPOSE 3000

# Copy code and update configuration
COPY . /home/ws-router/
WORKDIR /home/ws-router/
RUN npm install
CMD node app.js
