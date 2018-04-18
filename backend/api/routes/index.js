const passport = require('passport');
const cors = require('cors');

const conversation = require('../controllers/conversationController');
const workspace = require('../controllers/workspaceController');
const email = require('../controllers/emailController');

const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'http://www.mynutricard.com',
  // methods: 'GET, POST, HEAD, PUT, PATCH, DELETE',
  preflightContinue: false,
  credentials: true,
};

module.exports = app => {
  app.use(cors(corsOptions));

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

const stuff = {
  token: 'f1Dh0xplWkKs549wqznx42GM',
  team_id: 'T7YJ65CTC',
  api_app_id: 'A9TBELN4R',
  event: {
    type: 'message',
    message: {
      type: 'message',
      user: 'UA6DXMYTS',
      text: '<@U9TKS1XJN> is polling just you!',
      bot_id: 'BA6JD900H',
      attachments: [
        {
          callback_id: 'piwJAKMjdK4KJfPk6',
          fallback: 'tttttttttttttttttttttttttttttttttttt',
          title: 'tttttttttttttttttttttttttttttttttttt',
          id: 1,
          color: '35A8E0',
          actions: [
            {
              id: '1',
              name: 'add_comments',
              text: 'Submit Response',
              type: 'button',
              value: '7fDk2cCSp9yGxDMiY',
              style: '',
            },
          ],
        },
        {
          callback_id: 'piwJAKMjdK4KJfPk6',
          fallback: 'tttttttttttttttttttttttttttttttttttt',
          id: 2,
          fields: [
            {
              title: 'Responses',
              value:
                ':speech_balloon:<@U9TKS1XJN>: wish I knew how this worked\n:speech_balloon:<@U9TKS1XJN>: vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
              short: false,
            },
          ],
          mrkdwn_in: ['fields'],
        },
      ],
      edited: { user: 'UA6DXMYTS', ts: '1523835674.000000' },
      ts: '1523835558.000119',
    },
    subtype: 'message_changed',
    hidden: true,
    channel: 'DA790N3NZ',
    previous_message: {
      type: 'message',
      user: 'UA6DXMYTS',
      text: '<@U9TKS1XJN> is polling just you!',
      bot_id: 'BA6JD900H',
      attachments: [
        {
          callback_id: 'piwJAKMjdK4KJfPk6',
          fallback: 'tttttttttttttttttttttttttttttttttttt',
          title: 'tttttttttttttttttttttttttttttttttttt',
          id: 1,
          color: '35A8E0',
          actions: [
            {
              id: '1',
              name: 'add_comments',
              text: 'Submit Response',
              type: 'button',
              value: '7fDk2cCSp9yGxDMiY',
              style: '',
            },
          ],
        },
        {
          callback_id: 'piwJAKMjdK4KJfPk6',
          fallback: 'tttttttttttttttttttttttttttttttttttt',
          id: 2,
          fields: [
            {
              title: 'Responses',
              value:
                ':speech_balloon:<@U9TKS1XJN>: wish I knew how this worked\n:speech_balloon:<@U9TKS1XJN>: vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
              short: false,
            },
          ],
          mrkdwn_in: ['fields'],
        },
      ],
      edited: { user: 'UA6DXMYTS', ts: '1523835645.000000' },
      ts: '1523835558.000119',
    },
    event_ts: '1523835674.000140',
    ts: '1523835674.000140',
  },
  type: 'event_callback',
  event_id: 'EvA6K05U4R',
  event_time: 1523835674,
  authed_users: ['U9TKS1XJN'],
};
