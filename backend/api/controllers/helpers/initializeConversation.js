const { WebClient } = require('@slack/client');

const Workspace = require('../../models/workspaceModel');
const Conversation = require('../../models/conversationModel');
const Member = require('../../models/memberModel');
const Response = require('../../models/responseModel');

module.exports = initializeConversation = async (c_id, m_id) => {
  const conversation = await Conversation.findById(c_id);
  const web = new WebClient(process.env.XOXB);
  const dm = await web.im.open({ user: m_id });

  const history = await web.im.history({ channel: dm.channel.id });

  web.chat
    .postMessage({
      channel: dm.channel.id,
      text: conversation.questions[0],
      attachments: [
        {
          fallback: `${0},${c_id}`,
        },
        {
          text: conversation.questions[0],
        },
      ],
    })
    .then(res => {
      console.log('Message sent: ', history.messages[0].attachments);
    })
    .catch(console.error);
};
