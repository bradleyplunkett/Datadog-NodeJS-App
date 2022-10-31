const tracer = require('dd-trace').init({
  logInjection: true
});

module.exports = tracer;

// //Brad added this Winston logger
// const logger = createLogger({
//   level: 'info',
//   exitOnError: false,
//   format: format.json(),
//   transports: [
//     new transports.File({ filename: `logs/bradleynode.log` }),
//   ],
// });

const axios = require('axios');

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql2');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TASKDB'
});
 
// connect to database
mc.connect();

app.listen(parseInt(port, 10), () => {
  console.log(`Listening for requests on http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route