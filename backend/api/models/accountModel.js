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
    },
    user_id: {
      type: String,
    },
    channel: {
      type: String,
    },
    channel_id: {
      type: String,
    },
    configuration_url: {
      type: String,
    },
    url: {
      type: String,
    },
    bot_user_id: {
      type: String,
    },
    bot_access_token: {
      type: String,
    },
  },
  // conversations: [
  //   {
  //     conversation: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'conversation',
  //     },
  //   },
  // ],
});

module.exports = mongoose.model('account', accountSchema);
