const { WebClient } = require('@slack/client');
const util = require('util');
const colors = require('colors');

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
    initializeConversation(c_id, m_id);
  });
  res.send('probably worked');
};

const updateConversation = async body => {
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> Body'.bgBlue.green);
  // console.log(body);
  // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>'.bgBlue.red);
  // check what the last question in channel was
  // determine which conversation to post response to
  // determine if all questions have been answered
  // const conversation = await Conversation.findById(c_id);
  if (body.event.bot_id) {
    return;
  }

  const web = new WebClient(process.env.XOXB);
  const dm = await web.im.open({ user: body.event.user });
  const history = await web.im.history({ channel: dm.channel.id, count: 2 });
  // console.log(history.messages[1].attachments[0].fallback);

  if (history.messages[1].user === body.event.user) {
    return;
  }
  const [q_count, c_id] = history.messages[1].attachments[0].fallback.split(
    ','
  );
  // console.log('attachments', q_count, c_id);
  const member = await Member.findOne({ id: body.event.user });
  const conversation = await Conversation.findById(c_id).populate('responses');
  let numResponses = 0;
  // console.log(conversation);
  conversation.responses.forEach(r => {
    // console.log(r.member);
    // console.log(member._id.toString());
    if (r.member.toString() === member._id.toString()) {
      numResponses++;
    }
  });
  // console.log(numResponses);
  // console.log(conversation.questions);
  if (numResponses === conversation.questions.length - 1) {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> Conversation'.bgBlue.green);
    // console.log(conversation);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>'.bgBlue.red);
    const newResponse = await new Response({
      conversation: c_id,
      member: member._id,
      time_stamp: body.event.ts,
      response: body.event.text,
    });
    await newResponse.save();

    await Conversation.findByIdAndUpdate(c_id, {
      $push: { responses: newResponse._id },
    });
    return;
  } else if (numResponses < conversation.questions.length - 1) {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> Conversation'.bgBlue.green);
    // console.log(conversation);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>'.bgBlue.red);
    const newResponse = await new Response({
      conversation: c_id,
      member: member._id,
      time_stamp: body.event.ts,
      response: body.event.text,
    });
    await newResponse.save();

    await Conversation.findByIdAndUpdate(c_id, {
      $push: { responses: newResponse._id },
    });
    web.chat
      .postMessage({
        channel: dm.channel.id,
        text: `${conversation.questions[numResponses + 1]}`,
        attachments: [
          {
            fallback: `${conversation.questions.length},${c_id}`,
          },
        ],
      })
      .then(res => {})
      .catch(console.error);
    return;
  } else if (numResponses === conversation.questions.length) {
    return;
  }
};

const im = (req, res) => {
  updateConversation(req.body);
  /** Golden */
  const stuff = util.inspect(req.body, false, null);
  // console.log(stuff);
  res.send(req.body);
};

const interactive = (req, res) => {
  // res.send(req.body);
};

module.exports = {
  createConversation,
  deleteConversation,
  editConversation,
  allConversations,
  startConversation,
  updateConversation,
  im,
  interactive,
};
