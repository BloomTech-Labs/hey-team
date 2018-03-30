const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
// const token = 'xoxb-334119064773-U6lf4TG13OrIhJm2IvrX1Uvw';
const token =
  'xoxp-270618182930-333672065634-333966161058-b1a3c96692eec2b397bb3c614572c67f';

const web = new WebClient(token);

// See: https://api.slack.com/methods/channels.list
const stuff = async (req, res) => {
  team = await web.users.list();
  await console.log(team.members);
  web.users
    .list()
    .then(stuff => {
      const members = stuff.members;
      res.json({ members });
    })
    .catch(console.error);
  // web.channels
  //   .list()
  //   .then(res => {
  //     const channel = res.channels.find(c => c.is_member);
  //     console.log('Channel', channel);
  //   })
  //   .catch(console.error);
};

module.exports = {
  stuff,
};
