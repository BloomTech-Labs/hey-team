const mongoose = require('mongoose');

const convMapSchema = new mongoose.Schema({
  user_id: { type: String },
  c_id: { type: String },
  a_id: { type: String },
  channel: { type: String },
  res_index: { type: Number, default: 0 },
  q_index: { type: Number, default: 0 },
  questions: [{ type: String }],
  responses: [{ type: String }],
});

module.exports = mongoose.model('convMap', convMapSchema);

// example document
// Account: {
//   people: [
//     { responses: ['first response', 'second response', '...'] },
//     { responses: ['...'] },
//     { responses: ['...'] },
//   ];
// }
// // working example
// Account.findByIdAndUpdate(a_id, {
//   $set: { 'people.0.responses.0': 'new value' },
// });
// // successfully returns
// Account: {
//   people: [
//     { responses: ['new value', 'second response', '...'] },
//     { responses: ['...'] },
//     { responses: ['...'] },
//   ];
// }
/**
 * the goal is to now make this dynamic
 * so that we can pass an index into the
 * query. We're looking for a solution similar
 * to the code below.
 */
// Account.findByIdAndUpdate(a_id, {
// template literals not working here
// need another solution
//   $set: { `people.${pos1}.responses.${pos2}`: 'new value' },
// });
