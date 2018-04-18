const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  info: {
    name: { type: String },
    id: { type: String },
    image: { type: String },
    paidOn: { type: Date },
    active: { type: Boolean, default: false },

  },
  preferences: {
    receive_emails: { type: Boolean, default: false },
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  conversations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  ],
  bot: {
    access_token: { type: String },
    user_id: { type: String },
    channel: { type: String },
    channel_id: { type: String },
    configuration_url: { type: String },
    bot_user_id: { type: String },
    bot_access_token: { type: String },
  },
});

module.exports = mongoose.model('Workspace', workspaceSchema);
