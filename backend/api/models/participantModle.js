const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  time: {
    type: Date,
  },
  responces: [{ type: String }],
});

module.exports = mongoose.model('participant', participantSchema);
