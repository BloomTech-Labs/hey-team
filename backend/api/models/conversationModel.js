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
      default: false,
    },
    mon: {
      type: Boolean,
      default: false,
    },
    tue: {
      type: Boolean,
      default: false,
    },
    wed: {
      type: Boolean,
      default: false,
    },
    thu: {
      type: Boolean,
      default: false,
    },
    fri: {
      type: Boolean,
      default: false,
    },
    sat: {
      type: Boolean,
      default: false,
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
