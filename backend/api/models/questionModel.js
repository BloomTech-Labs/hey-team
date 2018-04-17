const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  response: { type: mongoose.Schema.Types.ObjectId, ref: 'Response' },
  question: String,
});

module.exports = mongoose.model('Question', questionSchema);
