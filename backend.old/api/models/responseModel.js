const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  response: {
    submittedOn: Date,
    user: String,
    avatar: String,
    questions: [],
    answers: [],
  },
});

module.exports = mongoose.model('response', responseSchema);
