const Conversation = require('../../models/conversationModel');
const Workspace = require('../../models/workspaceModel');
const Question = require('../../models/questionModel');
const Response = require('../../models/responseModel');
const Member = require('../../models/memberModel');

module.exports = createQuestion = async (w_id, c_id, question) => {
  const newQuestion = await new Question({
    workspace: w_id,
    Conversation: c_id,
    question: question,
  });
  console.log(newQuestion);
  await newQuestion.save();

  console.log('updating conversation');
  await Conversation.findByIdAndUpdate(c_id, {
    $push: { questions: newQuestion._id },
  })
    .then(c => {
      console.log('pushed question to conversation');
    })
    .catch(console.error);
};
