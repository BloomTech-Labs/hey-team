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

  // const createQuestions = async questions => {
  questions.forEach(q => {
    console.log('calling createQuestion');
    createQuestion(w_id, conversation._id, q);
  });
  // };

  // await createQuestions(questions);

  console.log('push conversation');
  await Workspace.findByIdAndUpdate(w_id, {
    $push: { conversation: conversation._id },
  });

  res.send(conversation);
};

module.exports = {
  createConversation,
};
