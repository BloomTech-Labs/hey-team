const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  response: String,
});

module.exports = mongoose.model('Response', responseSchema);
