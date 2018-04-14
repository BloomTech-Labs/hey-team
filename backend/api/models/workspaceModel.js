const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  info: {
    name: { type: String },
    id: { type: String },
    image: { type: String },
  },
  preferences: {
    receive_emails: { type: Boolean, default: false },
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  conversations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  ],
});

model.exports = mongoose.model('Workspace', workspaceSchema);
