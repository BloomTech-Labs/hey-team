const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  questions: [
    {
      type: String,
    },
  ],
  schedule: {
    mon: {
      type: Boolean,
    },
    time: {
      type: String,
    },
  },
  participants: [
    {
      user: {},
      responces: [],
    },
  ],
});

module.exports = mongoose.model('conversation', conversationSchema);
