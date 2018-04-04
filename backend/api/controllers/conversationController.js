const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');
const Member = require('../models/memberModel');

const colors = require('colors');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule } = req.body;
  const participants = [];

  await Account.findById('5ac43b3b30f8f724b88b4e90', function(err, model) {
    console.log(colors.yellow(model.team.members[0].name));
    model.team.members.forEach(m => {
      console.log(colors.yellow(m.name));
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
    '5ac43b3b30f8f724b88b4e90',
    { $push: { conversations: newConversation } },
    { safe: true, upsert: true, new: true },
    function(err, model) {
      // console.log('err', err);
      // console.log('model', model);
    }
  );

  // const test = await Account.findById({
  //   _id: '5ac43b3b30f8f724b88b4e90',
  // });

  // // console.log(test);
  // await test.conversations.push(newConversation);

  // console.log(test.conversations);

  // await test.save(function(err, model, numAffected) {
  //   if (err) return handleError(err);
  //   console.log(numAffected, 'Success!');
  //   // console.log(model);
  // });

  // const account = await Account.findById('5abd7623729a5b2bf4c3a8db');
  // await account.conversations.push(newConversation);
  // await account.save();

  // const c = await Conversation.find({});
  // console.log(c);

  // console.log(account.conversations[0]);
  res.json(newConversation);
};

const addResponses = async (req, res) => {
  const { response, user } = req.body;

  await Account.findById('5abeb1d0b2b1772ff0f1d129', function(err, model) {
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
  console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    '5abeb1d0b2b1772ff0f1d129',
    { $push: { conversations: newConversation } },
    { safe: true, upsert: true, new: true },
    function(err, model) {
      // console.log('err', err);
      // console.log('model', model);
    }
  );
  res.json(newConversation);
};

module.exports = {
  createConversation,
  addResponses,
};
