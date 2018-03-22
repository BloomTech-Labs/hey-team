const passport = require('passport');
const cors = require('cors');

const sendMessage = require('../controllers/messageController');

// const foodController = require('../controllers/foodController');
// const cardController = require('../controllers/cardController');
// const userController = require('../controllers/userController');

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
  app.route('/sendMessage').post(sendMessage.sendMessage);
};
