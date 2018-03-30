const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');

const colors = require('colors');

const createConversation = async (req, res) => {
  const { title, questions, participants, schedule } = req.body;
  // search for user id and return user
  // for each participant in list
  // account.team.members.find("user_id")
  // const actual participants.push()
  const newConversation = new Conversation({
    title,
    questions,
    participants,
    schedule,
  });
  console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    '5abd8e0f77283c24942533e5',
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
