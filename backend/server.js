const cors = require('cors');
const morgan = require('morgan');
// const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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
