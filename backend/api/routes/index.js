const passport = require('passport');
const cors = require('cors');

// const message = require('../controllers/messageController');
const workspace = require('../controllers/workspaceController');
// const bot = require('../controllers/accountBotController');
// const testController = require('../controllers/testController');
const conversation = require('../controllers/conversationController');
// const users = require('../controllers/usersController');

// const test = require('../controllers/testController');
// // const teamInfo = require('../controllers/getTeamInfo');

// const passportConfig = require('../../app/passport');
// // const middleware = require('../common/middleware');

const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'http://www.mynutricard.com',
  // methods: 'GET, POST, HEAD, PUT, PATCH, DELETE',
  preflightContinue: false,
  credentials: true,
};

module.exports = app => {
  app.use(cors(corsOptions));
  // app.route('/account/getAccountData').post(account.getAccountData);
  // // Account Routes
  app.route('/auth/login').get(workspace.login);
  app.route('/auth/bot').get(workspace.addBot);
  // Bot Routes
  // app.route('/slack/interactive').post(conversation.interactive);
  app.route('/slack/im/listen').post(conversation.im);
  // // Conversation Routes
  app.route('/conversation/create').post(conversation.createConversation);
  app.route('/conversation/delete').post(conversation.deleteConversation);
  app.route('/conversation/start').post(conversation.startConversation);
  app.route('/conversation/edit').post(conversation.editConversation);
  app.route('/conversation/all').post(conversation.allConversations);
  // User Routes
  app.route('/users/all').post(workspace.getAllMembers);
  app.route('/users/find').post(workspace.findMembers);
};
