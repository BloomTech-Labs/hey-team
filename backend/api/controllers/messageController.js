// const { IncomingWebhook } = require('@slack/client');
// const { RTMClient } = require('@slack/client');
// const url = process.env.SLACK_WEBHOOK_URL;
// const token = process.env.SLACK_TOKEN;
// const rtm = new RTMClient(token);
// // An access token (from your Slack app or custom integration - usually xoxb)
// const webhook = new IncomingWebhook(url);

// const sendMessage = (req, res) => {
//   const { message } = req.body;
//   // Send simple text to the webhook channel
//   webhook.send(message, function(err, res) {
//     if (err) {
//       console.log('Error:', err);
//     } else {
//       console.log('Message sent: ', res);
//     }
//   });
// };

// const questions = [
//   'how are you?',
//   'are you special?',
//   'is your life all that you expected?',
// ];

// const receiveMessage = (req, res) => {
//   rtm.start();

//   const conversationId = 'C7YJ65J10';
//   const queLength = questions.length;
//   let currentQuestion = 0;
//   rtm
//     .sendMessage(questions[currentQuestion], conversationId)
//     .then(res => {
//       console.log('Message sent: ', res.ts);
//       currentQuestion++;
//     })
//     .catch(console.error);

//   rtm.on('message', event => {
//     console.log(event.text);
//     if (currentQuestion < queLength) {
//       rtm
//         .sendMessage(questions[currentQuestion], conversationId)
//         .then(res => {
//           console.log('Message sent: ', res.ts);
//           currentQuestion++;
//         })
//         .catch(console.error);
//     } else {
//       rtm.disconnect();
//       //   web.chat
//       //     .postMessage({
//       //       channel: conversationId,
//       //       text: "Today's Standup Questionnaire",
//       //       attachments: [
//       //         {
//       //           fallback: 'Required plain-text summary of the attachment.',
//       //           color: '#36a64f',
//       //           author_name: 'Team Lead Name',
//       //           author_link: 'http://flickr.com/bobby/',
//       //           author_icon: 'http://flickr.com/icons/bobby.jpg',
//       //           title: 'Slack API Documentation',
//       //           title_link: 'https://api.slack.com/',
//       //           text: 'Optional text that appears within the attachment',
//       //           fields: [
//       //             {
//       //               title: 'Priority',
//       //               value: 'High',
//       //               short: false,
//       //             },
//       //           ],
//       //           image_url: 'http://my-website.com/path/to/image.jpg',
//       //           thumb_url: 'http://example.com/path/to/thumb.png',
//       //           footer: 'Slack API',
//       //           footer_icon:
//       //             'https://platform.slack-edge.com/img/default_application_icon.png',
//       //           ts: 123456789,
//       //         },
//       //       ],
//       //     })
//       //     .then(res => {
//       //       // `res` contains information about the posted message
//       //       console.log('Message sent: ', res.ts);
//       //     })
//       //     .catch(console.error);
//     }
//   });

//   res.status(200).send();
// };

// module.exports = {
//   sendMessage,
//   receiveMessage,
// };
