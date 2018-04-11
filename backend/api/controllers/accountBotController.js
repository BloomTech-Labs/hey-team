const Account = require('../models/accountModel');

const request = require('request');
const CLIENT_ID = '270618182930.333388702161';
const CLIENT_SECRET = '8a86f76a3e4f7de24fae4dab9397848b';

const botAccount = (req, res) => {
  if (!req.query.code) {
    // access denied
    return;
  }
  var data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,

      redirect_uri: 'https://cae652fb.ngrok.io/auth/bot',

      code: req.query.code,
    },
  };
  request.post('https://slack.com/api/oauth.access', data, async function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      const bot = JSON.parse(body);
      // console.log('NEWBOT', bot);
      // const findBot = await Account.find({ 'bot.user_id': bot.user_id });
      // if (findBot) {
      //   //Bot is already made!
      //   return res.redirect(__dirname + '../../../FAIL.html');
      // }
      const newBot = await Account.findOneAndUpdate(
        { 'owner.id': bot.user_id },
        {
          bot: {
            access_token: bot.access_token,
            user_id: bot.user_id,
            channel: bot.incoming_webhook.channel,
            channel_id: bot.incoming_webhook.channel_id,
            configuration_url: bot.incoming_webhook.configuration_url,
            bot_user_id: bot.bot.bot_user_id,
            bot_access_token: bot.bot.bot_access_token,
          },
        },
        function(err, botty) {
          if (err) {
            res.status(403).json({ err: err.message });
          }
          // res.status(200).json({ res: 'success ham!' });
          botty.save();
        }
      );
    }
    res.redirect(__dirname + '/public/HAMHAM_BOT_SNIFFER.html');
  });
};

module.exports = {
  botAccount,
};
