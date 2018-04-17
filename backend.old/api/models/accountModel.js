const mongoose = require('mongoose');
const memberSchema = require('./memberModel');
const convMapSchema = require('./convMapModel');

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
    timezone: {
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
    members: [
      // {
      //   member: {
      //     type: memberSchema,
      //   },
      // },
    ],
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
  conversations: [],
  conv_map: [],
  // conv_map: [
  //   {
  //     user_id: { type: String },
  //     c_id: { type: String },
  //   },
  // ],
});

module.exports = mongoose.model('account', accountSchema);