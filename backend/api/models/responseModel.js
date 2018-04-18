const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  time_stamp: String,
  response: String,
});

module.exports = mongoose.model('Response', responseSchema);
