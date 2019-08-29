// Author: Pedro Silva
// License: MIT

var winston = require('winston');
var logger = winston.createLogger(
{
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
}
);

module.exports = logger;
