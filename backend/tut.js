const { IncomingWebhook, WebClient } = require('@slack/client');

// console.log(process.env);
// const we = new WebClient
// const timeNotification = new IncomingWebhook(
//   'https://hooks.slack.com/services/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'
// );
const timeNotification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
const currentTime = new Date().toTimeString();
timeNotification.send(`The current time is ${currentTime}`, (error, resp) => {
  if (error) {
    return console.error(error);
  }
  console.log('Notification sent');
});
