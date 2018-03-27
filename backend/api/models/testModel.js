const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model('test', testSchema);
