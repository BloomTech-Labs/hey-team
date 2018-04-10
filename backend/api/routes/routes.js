const passport = require('passport');
const cors = require('cors');

const message = require('../controllers/messageController');
const account = require('../controllers/accountController');
const bot = require('../controllers/accountBotController');
const testController = require('../controllers/testController');
const conversation = require('../controllers/conversationController');

const test = require('../controllers/testController');
// const teamInfo = require('../controllers/getTeamInfo');

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
  // Account Routes
  app.route('/auth/login').get(account.login);
  // app.route('/auth/account').get(account.createUserAccount);
  app.route('/account/getAccountData').post(account.getAccountData);
  app.route('/account/getOneMember').post(account.getOneMember);
  app.route('/account/getAllMembers').post(account.getAllMembers);
  // Conversation Routes
  // app.route('/sendMessage').post(messageController.sendMessage);
  app.route('/auth/bot').get(bot.botAccount);
  app.route('/auth/login').get(account.login);
  app.route('/send/test').post(message.sendMessage);
  app.route('/auth/account').get(account.createUserAccount);
  // conversations
  app.route('/conversation/create').post(conversation.createConversation);
  app.route('/conversation/delete').post(conversation.deleteConversation);
  app.route('/conversation/all').post(conversation.allConversations);
  app.route('/conversation/edit').post(conversation.editConversation);
  app.route('/conversation/respond').post(conversation.respondToConversation);
  app.route('/conversation/start').post(conversation.startConversation);
  app.route('/conversation/test').post(conversation.test);
  app.route('/conversation/quicktest').post(conversation.quicktest);
  app.route('/conversation/initiate').post(conversation.initiate);
  app.route('/slack/im/listen').post(conversation.im);
};
