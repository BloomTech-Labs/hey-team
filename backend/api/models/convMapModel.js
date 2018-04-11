const mongoose = require('mongoose');

const convMapSchema = new mongoose.Schema({
  user_id: { type: String },
  c_id: { type: String },
  a_id: { type: String },
  channel: { type: String },
  res_index: { type: Number, default: 0 },
  q_index: { type: Number, default: 0 },
});

module.exports = mongoose.model('convMap', convMapSchema);
