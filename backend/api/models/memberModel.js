const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
  id: { type: String },
  team_id: { type: String },
  tz_offset: { type: String },
  tz_label: { type: String },
  tz_: { type: String },
  real_name: { type: String },
  name: { type: String },
  color: { type: String },
  image: { type: String },
  email: { type: String },
  bot_conv_channel: { type: String },
});

module.exports = mongoose.model('Member', memberSchema);
