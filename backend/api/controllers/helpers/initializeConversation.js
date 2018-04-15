const { WebClient } = require('@slack/client');

const Workspace = require('../../models/workspaceModel');
const Conversation = require('../../models/conversationModel');
const Member = require('../../models/memberModel');
const Response = require('../../models/responseModel');

module.exports = initializeConversation = async (w_id, c_id, m_id) => {
  const conversation = await Conversation.findById(c_id);
  const web = new WebClient(process.env.XOXB);
  const dm = await web.im.open({ user: m_id });

  web.chat
    .postMessage({
      channel: dm.channel.id,
      text: conversation.questions[0],
    })
    .then(res => {
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
};
