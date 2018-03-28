const conversation = require('../models/conversationModel');

const createConversation = (req, res) => {
  const {questions} = req.body;
  const newConversation = new conversation({ questions });
  console.log(newConversation);
  res.json(newConversation);
}

module.exports = {
  createConversation,
};