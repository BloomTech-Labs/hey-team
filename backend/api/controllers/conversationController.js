const conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');

const createConversation = async (req, res) => {
  const { questions } = req.body;
  const newConversation = new conversation({ questions });
  const newaccount = await Account.findOneAndUpdate(
    { _id: '5abd5ec6a92ce13aa88e123d' },
    {
      'conversations.conversation': newConversation,
    },
    (err, account) => {
      if (err) {
        res.status(403).json({ err: err.message });
      }
      // res.status(200).json({ res: 'success ham!' });
      console.log(account);
      // account.save();
    }
  );

  // newConversation.save();
  console.log('nc', newaccount);
  res.json(newConversation);
};

module.exports = {
  createConversation,
};
