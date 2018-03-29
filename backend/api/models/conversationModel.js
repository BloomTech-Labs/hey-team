const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  questions: [
    {
      // question: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'question',
      //   // required: true,
      // },
      type: String,
    },
  ],
  // schedule: {
  //   type: Date,
  //   // required: true,
  // },
  participants: [
    {
      participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'participant',
      },
    },
  ],
});

module.exports = mongoose.model('conversation', conversationSchema);
