const mongoose = require('mongoose');

const convMapSchema = new mongoose.Schema(
  {
    star_info: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { minimize: false }
);

module.exports = mongoose.model('convMap', convMapSchema);
