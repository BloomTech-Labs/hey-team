const { IncomingWebhook } = require('@slack/client');
const { RTMClient } = require('@slack/client');
const url = 'https://hooks.slack.com/services/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'
const token = 'xoxb-334119064773-U6lf4TG13OrIhJm2IvrX1Uvw'
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

const receiveMessage = (req, res) => {
  rtm.start();

  const conversationId = 'C7YJ65J10';
  const queLength = questions.length;
  let currentQuestion = 0;
  rtm
    .sendMessage(questions[currentQuestion], conversationId)
    .then(res => {
      console.log('Message sent: ', res.ts);
      currentQuestion++;
    })
    .catch(console.error);

  rtm.on('message', event => {
    console.log(event);
    if (currentQuestion < queLength) {
      rtm
      .sendMessage(questions[currentQuestion], conversationId)
      .then(res => {
        console.log('Message sent: ', res.ts);
          currentQuestion++;
        })
        .catch(console.error);
    } else {
      rtm.disconnect();
          //     }
          //   ],
          // })
          // .then(res => {
          //   // `res` contains information about the posted message
          //   console.log('Message sent: ', res.ts);
          // })
          // .catch(console.error);
    }
  });

  res.status(200).send();
};

module.exports = {
  sendMessage,
  receiveMessage,
};
