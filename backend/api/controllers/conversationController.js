const { WebClient } = require('@slack/client');

const createQuestion = require('./helpers/createQuestion');

const Conversation = require('../models/conversationModel');
const Workspace = require('../models/workspaceModel');
const Question = require('../models/questionModel');
const Response = require('../models/responseModel');
const Member = require('../models/memberModel');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule, w_id } = req.body;

  // find members
  const members = await Member.find({
    id: { $in: users },
  });

  const conversation = await new Conversation({
    workspace: w_id,
    members: members,
    title: title,
    schedule: schedule,
  });

  await conversation.save();

  questions.forEach(q => {
    console.log('calling createQuestion');
    createQuestion(w_id, conversation._id, questions[0]);
  });

  console.log('push conversation');
  await Workspace.findByIdAndUpdate(w_id, {
    $push: { conversation: conversation._id },
  })
    .then('pushed conversation to workspace')
    .catch(console.error);

  res.send(conversation);
};

module.exports = {
  createConversation,
};
