const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = express();

const routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
// mongoose.connect('localhost:3000', { useMongoClient: true });

server.use(morgan('dev'));
server.use(bodyParser.json());

routes(server);

const port = process.env.PORT || 3031;

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
