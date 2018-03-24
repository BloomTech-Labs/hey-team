const passport = require('passport');
const cors = require('cors');

const messageController = require('../controllers/messageController');

// const passportConfig = require('../common/passport');
// const middleware = require('../common/middleware');

const corsOptions = {
  // origin: 'http://localhost:3000',
  // origin: 'http://www.mynutricard.com',
  // methods: 'GET, POST, HEAD, PUT, PATCH, DELETE',
  // preflightContinue: false,
  credentials: true,
};

module.exports = app => {
  app.use(cors(corsOptions));
  app.route('/sendMessage').post(messageController.sendMessage);
  app.route('/receiveMessage').get(messageController.receiveMessage);
};
