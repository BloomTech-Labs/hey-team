const { WebClient } = require('@slack/client');

const initializeConversation = require('./helpers/initializeConversation');
const createQuestion = require('./helpers/createQuestion');

const Conversation = require('../models/conversationModel');
const Workspace = require('../models/workspaceModel');
const Question = require('../models/questionModel');
const Response = require('../models/responseModel');
const Member = require('../models/memberModel');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule, w_id } = req.body;

  // find all members and add a conversation to member object
  /** Golden */
  const members = await Member.find({
    id: { $in: users },
  });

  const conversation = await new Conversation({
    workspace: w_id,
    members: members,
    title: title,
    questions: questions,
    schedule: schedule,
  });

  await conversation.save();

  // questions.forEach(q => {
  //   console.log('calling createQuestion');
  //   createQuestion(w_id, conversation._id, q);
  // });

  console.log('push conversation');
  await Workspace.findByIdAndUpdate(w_id, {
    $push: { conversations: conversation._id },
  })
    .then('pushed conversation to workspace')
    .catch(console.error);

  res.send(conversation);
};

const deleteConversation = async (req, res) => {
  const { w_id, c_id } = req.body;

  Conversation.findByIdAndRemove(c_id);

  Workspace.findByIdAndUpdate(w_id, {
    $pull: { conversations: c_id },
  });
};

const editConversation = async (req, res) => {
  const { c_id, c } = req.body;
  const conversation = Conversation.findByIdAndUpdate(c_id, {
    $update: { title: c.title },
    $update: { members: c.members },
    $update: { questions: c.questions },
    $update: { schedule: c.schedule },
    $update: { responses: [] },
  });
};

const allConversations = async (req, res) => {
  const { w_id } = req.body;
  Workspace.findById(w_id)
    .then(w => {
      res.send(w.conversations);
    })
    .catch(console.error);
};

const startConversation = async (req, res) => {
  const { w_id, c_id, members } = req.body;
  members.forEach(m_id => {
    initializeConversation(w_id, c_id, m_id);
  });
  res.send('probably worked');
};

const im = (req, res) => {
  // continueConversation(req.body);
  console.log(req.body);
  res.send(req.body);
};

module.exports = {
  createConversation,
  deleteConversation,
  editConversation,
  allConversations,
  startConversation,
  im,
};
