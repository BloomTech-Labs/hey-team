const { IncomingWebhook } = require('@slack/client');
const url = process.env.SLACK_WEBHOOK_URL;
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

module.exports = {
  sendMessage,
};
