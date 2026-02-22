const winston = require('winston');

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({

  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf( log => `${log.timestamp} [${log.level}]: ${log.message}`) 
  ),

}));

allowedTransports.push(new winston.transports.File({
  filename: `app.log`
}));

const logger = winston.createLogger({
  format: winston.format.combine(
    // First argument to the combine method is defining the structure of the timestamp
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // Second argument to the combine method, which defines what is exactly going to be printed in the log
    winston.format.printf( log => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  ),
  transports: allowedTransports
});

module.exports = logger;