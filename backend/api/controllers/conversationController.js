const { RTMClient, WebClient, IncomingWebhook } = require('@slack/client');
const async = require('async');
const rp = require('request-promise');

const url =
  'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(url);

const Conversation = require('../models/conversationModel');
const Response = require('../models/responseModel');
const Account = require('../models/accountModel');
const ConvMap = require('../models/convMapModel');
const Member = require('../models/memberModel');

const colors = require('colors');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule, a_id } = req.body;
  const participants = [];

  await Account.findById(a_id, function(err, model) {
    model.team.members.forEach(m => {
      // console.log(colors.yellow(m.name));
      users.forEach(u => {
        if (m.id === u) {
          participants.push(m);
        }
      });
    });
  });
  // if (query) participants.push(query.select('name'));

  const newConversation = new Conversation({
    title,
    questions,
    participants,
    schedule,
  });
  // console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    a_id,
    { $push: { conversations: newConversation } },
    { safe: true, upsert: true, new: true },
    function(err, model) {
      // console.log('err', err);
      // console.log('model', model);
    }
  );

  // const account = await Account.findById('5abd7623729a5b2bf4c3a8db');
  // await account.conversations.push(newConversation);
  // await account.save();

  // await account.save(function(err, model, numAffected) {
  //   if (err) return handleError(err);
  //   console.log(numAffected, 'Success!');
  // });

  res.json(newConversation);
};

const deleteConversation = async (req, res) => {
  const { a_id, c_id } = req.body;
  const account = await Account.findById(a_id);
  account.conversations.forEach(c => {
    if (c._id.toString() === c_id) {
      account.conversations.remove(c);
    }
  });
  account.save();
  res.status(200);
};

const allConversations = async (req, res) => {
  const { a_id } = req.body;
  const account = await Account.findById(a_id);
  res.json(account.conversations);
};

const editConversation = async (req, res) => {
  const { a_id, c_id, conversation } = req.body;
  const newConversation = new Conversation(conversation);
  const account = await Account.findById(a_id);
  account.conversations.forEach(c => {
    if (c._id.toString() === c_id) {
      account.conversations.remove(c);
      account.conversations.push(newConversation);
      account.save();
      return;
    }
  });
  res.status(200);
};

const respondToConversation = async (req, res) => {
  const { a_id, c_id } = req.body;
  const account = await Account.findById(a_id);
};

const addResponses = async (req, res) => {
  const { response, user, a_id } = req.body;

  await Account.findById(a_id, function(err, model) {
    model.conversations.forEach(c => {
      c.for;
      users.forEach(u => {
        if (m.id === u) {
          participants.push(m);
        }
      });
    });
  });
  // if (query) participants.push(query.select('name'));

  const newConversation = new Conversation({
    title,
    questions,
    participants,
    schedule,
  });
  // console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    a_id,
    { $push: { conversations: newConversation } },
    { safe: true, upsert: true, new: true },
    function(err, model) {
      // console.log('err', err);
      // console.log('model', model);
    }
  );
  res.json(newConversation);
};

const startConversation = async (req, res) => {
  const { a_id, c_id, users } = await req.body;
  users.forEach(user => {
    initiate(a_id, c_id, user);
  });
  res.send(req.body);
};

const sendToParticipant = async (a_id, c_id, users) => {};

const quicktest = async (req, res) => {
  // console.log(req.body);
  const { a_id, c_id, users } = await req.body;
  users.forEach(user => {
    initiate(a_id, c_id, user);
  });
  res.send(req.body);
};

const initiate = async (a_id, c_id, user_id) => {
  console.log(user_id);

  const account = await Account.findById(a_id);
  const token = 'xoxb-334119064773-rgcvNMZI70rMnTd22lmXGryY';
  const web = new WebClient(token);

  await Account.findByIdAndUpdate(a_id, {
    $pull: { conv_map: { user_id: user_id } },
  });

  let questions = [];
  account.conversations.forEach(c => {
    if (c._id.toString() === c_id) {
      questions = c.questions;
    }
  });

  const dm = await web.im.open({ user: user_id });
  const channel = dm.channel.id;

  const newConvMap = new ConvMap({ user_id, channel, c_id, a_id });
  account.conv_map.push(newConvMap);

  web.chat
    .postMessage({
      channel: dm.channel.id,
      text: questions[1],
    })
    .then(res => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

  account.save();
};

const continueConversation = body => {
  Account.findOne({ conv_map: { channel: body.channel } });
};

const im = (req, res) => {
  continueConversation(req.body);
  // console.log(req.body);
  res.send(req.body);
};

module.exports = {
  createConversation,
  deleteConversation,
  allConversations,
  editConversation,
  respondToConversation,
  startConversation,
  quicktest,
  im,
};
