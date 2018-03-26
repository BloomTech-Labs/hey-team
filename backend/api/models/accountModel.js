const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  conversations: [
    {
      conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversation',
      },
    },
  ],
});

module.exports = mongoose.model('account', accountSchema);
