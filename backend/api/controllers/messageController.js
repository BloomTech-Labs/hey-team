const { IncomingWebhook } = require('@slack/client');
const { RTMClient } = require('@slack/client');
const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');
const Response = require('../models/responseModel');

// const url = process.env.SLACK_WEBHOOK_URL;
// const token = process.env.SLACK_TOKEN;
const url =
  'https://hooks.slack.com/services/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';
const token = 'xoxb-334119064773-U6lf4TG13OrIhJm2IvrX1Uvw';
const rtm = new RTMClient(token);
// An access token (from your Slack app or custom integration - usually xoxb)
const webhook = new IncomingWebhook(url);

const sendMessage = (req, res) => {
  const { message } = req.body;
  // Send simple text to the webhook channel
  webhook.send(message, function(err, res) {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Message sent: ', res);
    }
  });
};

const questions = [
  'how are you?',
  'are you special?',
  'is your life all that you expected?',
];

const answers = [];

const receiveMessage = async (req, res) => {
  // rtm.start();
  // // rtm.subscribePresence('U9TKS1XJN');

  // const conversationId = 'C7YJ65J10';
  // const queLength = questions.length;
  // let currentQuestion = 0;
  // rtm
  //   .sendMessage(questions[currentQuestion], conversationId)
  //   .then(res => {
  //     console.log('Message sent: ', res);
  //     currentQuestion++;
  //   })
  //   .catch(console.error);

  // rtm.on('message', event => {
  //   console.log('event', event);
  //   answers.push(event.text);
  //   if (currentQuestion < queLength) {
  //     rtm
  //       .sendMessage(questions[currentQuestion], conversationId)
  //       .then(res => {
  //         console.log('Message sent: ', res);
  //         currentQuestion++;
  //       })
  //       .catch(console.error);
  //   } else {
  //     rtm.disconnect();
  //     // web.chat
  //     //   .postMessage({
  //     //     channel: conversationId,
  //   }
  // });
  const newConversation = new Conversation({
    // title,
    // questions,
    // participants,
    // schedule,
  });
  const newResponse = new Response({
    name: 'test',
  });
  const test = await Account.findById({
    _id: '5ac43b3b30f8f724b88b4e90',
  });

  // console.log(test);
  await test.conversations.push(newConversation);
  await test.conversations.remove(newConversation);
  await test.conversations[0].responses.push(newResponse);

  // console.log(test.conversations[0].responses);

  await test.save(function(err, model, numAffected) {
    if (err) return handleError(err);
    // console.log(typeof model.conversations[0].responses);

    console.log(numAffected, 'Success!');
    // console.log(model);
  });

  // const test = await Account.findById(
  //   {
  //     _id: '5ac43b3b30f8f724b88b4e90',
  //   },
  //   function(err, model) {
  //     model.conversations[0].responses.push(newResponse);
  //     console.log('err', err);
  //     console.log('model', model.conversations[0].responses);
  //     model.save();
  //   }
  // );

  // console.log(test);

  // Account.findById('5ac4043adb793939184b5eee', async function(err, model) {
  //   await model.conversations.forEach(c => {
  //     // console.log(c);
  //     // console.log(typeof c._id);
  //     // 'Account.conversations[0].participants[0].responces';
  //     // console.log(c._id.toString() === '5ac40502de0d4346ecc923d5');
  //     const response = { user: 'ham dawg' };
  //     // if (c._id.toString() === '5ac4119e5c6e9628645c5c34') {
  //     console.log('yes');
  //     Account.findByIdAndUpdate(
  //       {
  //         _id: '5ac4043adb793939184b5eee',
  //         // 'conversations.3': '5ac4119e5c6e9628645c5c34',
  //       },
  //       { $push: { 'conversations.3.title': 'response' } },
  //       { safe: true, upsert: true, new: true },
  //       function(err, model) {
  //         console.log('err', err);
  //         console.log('model', model);
  //       }
  //     );
  //     // }
  //   });
  // });

  res.status(200).send(test);
};

module.exports = {
  sendMessage,
  receiveMessage,
};
