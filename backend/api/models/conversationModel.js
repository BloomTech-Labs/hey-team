const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  questions: [
    {
      type: String,
      // required: true,
    },
  ],
  schedule: {
    type: Date,
    // required: true,
  },
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
