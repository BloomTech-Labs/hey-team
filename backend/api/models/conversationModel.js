const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }],
  questions: [{ type: String }],
  broadcast: { type: String },
  title: { type: String, default: 'Untitled' },
  schedule: {
    sun: {
      type: Boolean,
    },
    mon: {
      type: Boolean,
    },
    tue: {
      type: Boolean,
    },
    wed: {
      type: Boolean,
    },
    thu: {
      type: Boolean,
    },
    fri: {
      type: Boolean,
    },
    sat: {
      type: Boolean,
    },
    time: {
      type: String,
    },
    modifier: {
      type: String,
      default: 'AM',
    },
    tz: {
      type: Number,
      default: -5,
    },
  },
});

module.exports = mongoose.model('Conversation', conversationSchema);
