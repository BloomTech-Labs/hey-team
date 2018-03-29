const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  owner: {
    access_token: {
      type: String,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  team: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    domain: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  bot: {
    access_token: {
      type: String,
      default: '',
    },
    user_id: {
      type: String,
      default: '',
    },
    channel: {
      type: String,
      default: '',
    },
    channel_id: {
      type: String,
      default: '',
    },
    configuration_url: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    bot_user_id: {
      type: String,
      default: '',
    },
    bot_access_token: {
      type: String,
      default: '',
    },
  },
  conversations: [
    {
      conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
      },
      default: {
        questions: [
          {
            type: String,
          },
        ],
        participants: [
          {
            participant: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'participant',
            },
          },
        ],
      },
    },
  ],
});

module.exports = mongoose.model('account', accountSchema);
