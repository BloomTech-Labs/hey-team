const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = express();

const routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect(
  // 'mongodb://localhost:27017/testuser',
  'mongodb://davidlong:5ive7even@ds233769.mlab.com:33769/hey-test-team',
  {
    useMongoClient: true,
  }
);

server.use(morgan('dev'));
server.use(bodyParser.json());

routes(server);

const port = process.env.PORT || 3031;

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
