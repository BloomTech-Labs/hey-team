const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');
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

const receiveMessage = async (req, res) => {
  // const dm = await webhook.im.open({user: ''});
  rtm.start();
  const convo = await Account.findById({
    _id: '5ac570fdfb14b00014687413',
  });

  // convo.conversations.forEach(c => {
  // if (schedule) {}
  //   c.participants.forEach(p => {});
  // });
  // rtm.subscribePresence('U9TKS1XJN');
  convo.conversations.forEach(c => {
    console.log(c._id);
    if (c._id.toString() === '5ac570fdfb14b00014687413') {
      questions = c.questions;
    }
  });

  const conversationId = 'C7YJ65J10';
  const queLength = questions.length;
  let currentQuestion = 0;
  rtm
    .sendMessage(questions[currentQuestion], conversationId)
    .then(res => {
      // console.log('Message sent: ', res);
      currentQuestion++;
    })
    .catch(console.error);

  rtm.on('message', event => {
    // console.log('event', event);
    answers.push(event.text);
    if (currentQuestion < queLength) {
      rtm
        .sendMessage(questions[currentQuestion], conversationId)
        .then(res => {
          // console.log('Message sent: ', res);
          currentQuestion++;
        })
        .catch(console.error);
    } else {
      rtm.disconnect();
      // web.chat
      //   .postMessage({
      //     channel: conversationId,
      const newConversation = new Conversation({});
      const newResponse = new Response({
        user: 'test',
        questions,
        answers,
      });

      convo.conversations.push(newConversation);
      convo.conversations.remove(newConversation);
      convo.conversations[0].responses.push({
        submittedOn: new Date(),
        user: 'String',
        avatar: 'String',
        questions,
        answers,
      });

      convo.save();

      console.log(convo.conversations[0]);
    }
  });

  res.status(200).send(convo);
};

module.exports = {
  createConversation,
  deleteConversation,
  allConversations,
  editConversation,
  respondToConversation,
};
