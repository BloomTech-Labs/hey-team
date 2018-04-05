// import { WebClient } from '@slack/client';

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
// const web = new WebClient(token);

const sendMessage = (req, res) => {
  const { message } = req.body;
  // Send simple text to the webhook channel
  // webhook.send(message, function(err, res) {
  //   if (err) {
  //     console.log('Error:', err);
  //   } else {
  //     console.log('Message sent: ', res);
  //   }
  // });
};

let questions = [];

const answers = [];

const receiveMessage = async (req, res) => {
  // const dm = await webhook.im.open({user: ''});
  rtm.start();
  const convo = await Account.findById({
    _id: '5ac63c27e0b4020b1e810d33',
  });

  // convo.conversations.forEach(c => {
  // if (schedule) {}
  //   c.participants.forEach(p => {});
  // });
  // rtm.subscribePresence('U9TKS1XJN');
  convo.conversations.forEach(c => {
    console.log(c._id);
    if (c._id.toString() === '5ac63c27e0b4020b1e810d33') {
      questions = c.questions;
    }
  });

  const conversationId = 'C7YJ65J10';
  const queLength = questions.length;
  let currentQuestion = 0;
  rtm
    .sendMessage(questions[currentQuestion], conversationId)
    .then(res => {
      // console.log('Message sent: ', res);
      currentQuestion++;
    })
    .catch(console.error);

  rtm.on('message', event => {
    // console.log('event', event);
    answers.push(event.text);
    if (currentQuestion < queLength) {
      rtm
        .sendMessage(questions[currentQuestion], conversationId)
        .then(res => {
          // console.log('Message sent: ', res);
          currentQuestion++;
        })
        .catch(console.error);
    } else {
      rtm.disconnect();
      // web.chat
      //   .postMessage({
      //     channel: conversationId,
      const newConversation = new Conversation({});
      const newResponse = new Response({
        user: 'test',
        questions,
        answers,
      });

      convo.conversations.push(newConversation);
      convo.conversations.remove(newConversation);
      convo.conversations[0].responses.push({
        submittedOn: new Date(),
        user: 'String',
        avatar: 'String',
        questions,
        answers,
      });

      convo.save();

      console.log(convo.conversations[0]);
    }
  });

  res.status(200).send(convo);
};

module.exports = {
  sendMessage,
  receiveMessage,
};
