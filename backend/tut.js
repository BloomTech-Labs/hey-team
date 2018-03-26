const { IncomingWebhook, WebClient } = require('@slack/client');

console.log('Getting started with Slack Developer Kit for Node.js');

const web = new WebClient(process.env.SLACK_TOKEN);
const timeNotification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
const currentTime = new Date().toTimeString();

timeNotification.send(`The current time is ${currentTime}`, (error, resp) => {
  if (error) {
    return console.error(error);
  }
  console.log('Notification sent');
  console.log('Waiting a few seconds for search indexes to update...');
  setTimeout(() => {
    console.log('Calling search.messages');
    web.search
      .messages({ query: currentTime })
      .then(resp => {
        if (resp.messages.total > 0) {
          console.log('First match:', resp.messages.matches[0]);
        } else {
          console.log('No matches found');
        }
      })
      .catch(console.error);
  }, 2000);
});
