const passport = require('passport');
const cors = require('cors');

const conversation = require('../controllers/conversationController');
const workspace = require('../controllers/workspaceController');
const email = require('../controllers/emailController');

const stripe = require('../controllers/paymentController');

const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'http://www.mynutricard.com',
  // methods: 'GET, POST, HEAD, PUT, PATCH, DELETE',
  preflightContinue: false,
  credentials: true,
};

module.exports = app => {
  app.use(cors(corsOptions));
  app.route('/stripe').post(stripe.payment);

  // Mail Routes
  app.route('/account/email').post(email.emailSender);

  // Auth Routes
  app.route('/auth/bot').get(workspace.addBot);
  app.route('/auth/login').get(workspace.login);

  // Bot Routes
  app.route('/slack/im/listen').post(conversation.im);

  // Conversation Routes
  app.route('/conversation/create').post(conversation.createConversation);
  app.route('/conversation/delete').post(conversation.deleteConversation);
  app.route('/conversation/start').post(conversation.startConversation);
  app.route('/conversation/edit').post(conversation.editConversation);
  app.route('/conversation/all').post(conversation.allConversations);

  // User Routes
  app.route('/users/all').post(workspace.getAllMembers);
  app.route('/users/find').post(workspace.findMembers);
};
