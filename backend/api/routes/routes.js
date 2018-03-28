const passport = require('passport');
const cors = require('cors');

const messageController = require('../controllers/messageController');
const accountController = require('../controllers/accountController');
const testController = require('../controllers/testController');

const passportConfig = require('../../app/passport');
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
  app.use(passport.initialize());
  // app.route('/sendMessage').post(messageController.sendMessage);
  // app.route('/receiveMessage').get(messageController.receiveMessage);
  app.route('/test').get(accountController.createUserAccount);
  app.route('/testy').get(testController.slackOAuth);
};
