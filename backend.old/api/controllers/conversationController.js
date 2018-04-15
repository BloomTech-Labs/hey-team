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
  const token = '';
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

  const newConvMap = new ConvMap({ user_id, channel, c_id, a_id, questions });
  account.conv_map.push(newConvMap);

  web.chat
    .postMessage({
      channel: dm.channel.id,
      text: questions[0],
    })
    .then(res => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

  account.save();
};

const continueConversation = async body => {
  // console.log(1);
  const allAccounts = await Account.find({});
  const token = 'xoxb-334119064773-UW39H2oHxVepvxe1DJWXlbmd';
  const web = new WebClient(token);
  let a_id;
  allAccounts.forEach(a => {
    a.conv_map.forEach(m => {
      if (m.channel.toString() === body.event.channel) {
        a_id = m.a_id;
        // console.log(2);
        return;
      }
    });
  });
  let pos = 0;
  const ham = `conv_map.0.responses`;
  const obj = { $set: { ham: '6666666' } };
  console.log('ham', ham);
  await Account.findByIdAndUpdate(a_id, {
    $set: { 'conversations.0.title': 'tofu' },
    $set: { 'conv_map.0.responses.0': '!!!!!!!!!!!!!!!!!!' },
  });
  const account = await Account.findById(a_id);
  // // account.team.name = 'ham';
  // console.log(account.team.name);
  // // account.conversations[0].title = 'poo';
  // account.save(function(err, product, numAffected) {
  //   console.log(err, numAffected);
  // });

  account.conv_map.forEach((a, i) => {
    if (a.user_id === body.event.user) {
      if (a.q_index < a.questions.length) {
        a.responses[a.q_index] = body.event.text;
        account.conversations.forEach(c => {
          if (c._id.toString() === a.c_id) {
            c.responses[a.q_index] = body.event.text;
          }
          a.q_index++;
        });
        console.log('index', account.conv_map[i].q_index);
        console.log('responses', account.conv_map[i].responses);
        console.log(account.conversations);
        account.save();
      }
      if (a.q_index < a.questions.length) {
        // console.log(5);
        web.chat
          .postMessage({
            channel: body.event.channel,
            text: a.questions[a.q_index],
          })
          .then(res => {
            // `res` contains information about the posted message
            console.log('Message sent: ', res.ts);
            account.save();
          })
          .catch(console.error);
      } else {
        // console.log(6);
        web.chat
          .postMessage({
            channel: body.event.channel,
            text: 'All done for now!',
          })
          .then(res => {
            // `res` contains information about the posted message
            console.log('Message sent: ', res.ts);
            account.save();
          })
          .catch(console.error);
      }
    }
  });
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
