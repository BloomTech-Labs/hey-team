const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({});

module.exports = mongoose.model('participant', participantSchema);
