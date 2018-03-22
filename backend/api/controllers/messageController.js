const { IncomingWebhook } = require('@slack/client');
const { RTMClient } = require('@slack/client');
const url = process.env.SLACK_WEBHOOK_URL;
const token = process.env.SLACK_TOKEN;
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

const receiveMessage = (req, res) => {
  rtm.start();

  const conversationId = 'C7YJ65J10';

  rtm
    .sendMessage('This is a new message so I know its new', conversationId)
    .then(res => {
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

  rtm.on('message', event => {
    console.log(event.text);
    // rtm.disconnect();
  });

  rtm
    .sendMessage(
      'This is the second messave so I know its the second message and its supposed to come second',
      conversationId
    )
    .then(res => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

  res.status(200).send();
};

module.exports = {
  sendMessage,
  receiveMessage,
};
