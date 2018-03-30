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
    sun: {
      type: Boolean,
    },
    time: {
      type: String,
    },
  },
  participants: [
    {
      user: {
        name: {
          type: String,
        },
        avitar: {
          type: String,
        },
      },
      responces: [],
    },
  ],
});

module.exports = mongoose.model('conversation', conversationSchema);
