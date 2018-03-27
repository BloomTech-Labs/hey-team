const { RTMClient, WebClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
// Need a web client to find a channel where the app can post a message
const web = new WebClient(token);
// This is the channel ID
const conversationId = 'C7YJ65J10';

rtm.start();

// Load the current channels list asynchrously
const receiveMessage = () => {
	
};

module.exports = {
	receiveMessage
};
