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
      name: {
        type: String,
      },
      id: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
  ],
  responses: [
    // {
    //   submittedOn: Date,
    //   user: String,
    //   avatar: String,
    //   questions: [],
    //   answers: [],
    // },
  ],
});

module.exports = mongoose.model('conversation', conversationSchema);