const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');
const Member = require('../models/memberModel');

const colors = require('colors');

const colors = require('colors');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule } = req.body;
  const participants = [];

  await Account.findById('5abeb1d0b2b1772ff0f1d129', function(err, model) {
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
  // const account = await Account.findById('5abd7623729a5b2bf4c3a8db');
  // await account.conversations.push(newConversation);
  // await account.save();

  // const c = await Conversation.find({});
  // console.log(c);

  // console.log(account.conversations[0]);
  res.json(newConversation);
};

module.exports = {
  createConversation,
};