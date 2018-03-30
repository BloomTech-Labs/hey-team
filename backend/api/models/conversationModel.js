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
  // schedule: {
  //   type: Date,
  //   // required: true,
  // },
  participants: [],
});

module.exports = mongoose.model('conversation', conversationSchema);
