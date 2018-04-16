const { WebClient } = require('@slack/client');
const util = require('util');

const Conversation = require('../../models/conversationModel');
const Workspace = require('../../models/workspaceModel');
const Response = require('../../models/responseModel');
const Member = require('../../models/memberModel');

module.exports = initializeConversation = async (c_id, m_id) => {
  const conversation = await Conversation.findById(c_id);
  const web = new WebClient(process.env.XOXB);
  const dm = await web.im.open({ user: m_id });

  const history = await web.im.history({ channel: dm.channel.id });

  web.chat
    .postMessage({
      channel: dm.channel.id,
      text: `Hello `,
      attachments: [
        {
          /** Golden */
          // might need to switch to callback_id
          fallback: `{"index": ${0},"c_id": "${c_id}"}`,
        },
        {
          text: conversation.questions[0],
        },
      ],
    })
    .then(res => {
      // let h = history.messages[0].attachments[0].fallback;
      // console.log(history);
      // console.log('Message sent: ', JSON.parse(h));
    })
    .catch(console.error);

  // web.chat
  //   .postMessage({
  //     channel: dm.channel.id,
  //     text: `Hello <@U9TKS1XJN> ${conversation.questions[0]}`,
  //     attachments: [
  //       {
  //         title: 'Can you tell me how the West Ham was won?',
  //         color: '35A8E0',
  //         mrkdwn: true,
  //         actions: [
  //           {
  //             name: 'add_comments',
  //             text: 'This is a Boston Button',
  //             type: 'button',
  //             value: 'This is a Boston Butt-on',
  //             input: {
  //               title: 'Are you sure?',
  //               text: "Wouldn't you prefer a good game of chess?",
  //               ok_text: 'Yes',
  //               dismiss_text: 'No',
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   })
  //   .then(res => {
  //     let h = history.messages[0].attachments[0].fallback;

  //     console.log('Message sent: ', JSON.parse(h));
  //   })
  //   .catch(console.error);
};
