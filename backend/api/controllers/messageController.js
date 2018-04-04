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

const questions = [];

const answers = [];

const receiveMessage = async (req, res) => {
  rtm.start();
  // rtm.subscribePresence('U9TKS1XJN');
  const convo = await Account.findById({
    _id: '5ac43b3b30f8f724b88b4e90',
  });
  questionsss = convo.conversations['5ac43b3b30f8f724b88b4e90'].questions;
  console.log(questionsss);

  // const conversationId = 'C7YJ65J10';
  // const queLength = questions.length;
  // let currentQuestion = 0;
  // rtm
  //   .sendMessage(questions[currentQuestion], conversationId)
  //   .then(res => {
  //     console.log('Message sent: ', res);
  //     questions;
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

  const newConversation = new Conversation({});
  const newResponse = new Response({
    user: 'test',
    questions,
    answers,
  });

  const test = await Account.findById({
    _id: '5ac43b3b30f8f724b88b4e90',
  });

  await test.conversations.push(newConversation);
  await test.conversations.remove(newConversation);
  await test.conversations[0].responses.push({
    submittedOn: Date.now,
    user: 'String',
    avatar: 'String',
    questions: [],
    answers: [],
  });

  res.status(200).send(test);
};

module.exports = {
  sendMessage,
  receiveMessage,
};
