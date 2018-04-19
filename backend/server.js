require('dotenv').config();
const util = require('util');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scheduler = require('./api/scheduler');

console.log(process.env.DB_HOST);
const server = express();

const routes = require('./api/routes');

mongoose.Promise = global.Promise;
// process.env.MONGO
mongoose.connect(process.env.DB_HOST);

server.use(morgan('dev'));
server.use(bodyParser.json());

routes(server);

const port = process.env.PORT || 3031;

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

setInterval(scheduler.startScheduler, 1000 * 60);
setInterval(scheduler.paymentScheduler, 1000 * 60 * 60 * 24);
// setInterval(scheduler.paymentScheduler, 1000 * 10);
