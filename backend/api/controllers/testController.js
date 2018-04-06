const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const User = require('../models/testModel');
const request = require('request');

// const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env,
// const SlackStrategy = require('passport-slack').Strategy;
// const passport = require('passport');
// const JWT = require('jsonwebtoken');

// signToken = user => {
//   return JWT.sign(
//     {
//       iss: 'daviddesigns',
//       sub: user._id,
//       iat: new Date().getTime(),
//       exp: new Date().setDate(new Date().getDate() + 1),
//     },
//     CLIENT_SECRET
//   );
// };

// setup the strategy using defaults
const slackOAuth = (req, res) => {
  if (!req.query.code) {
    // access denied
    return;
  }
  var data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
    },
  };
  request.post('https://slack.com/api/oauth.access', data, function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      // Get an auth token
      let oauthToken = JSON.parse(body).access_token;

      // OAuth done- redirect the user to wherever
      console.log(JSON.parse(body));
      res.redirect(__dirname + '/public/success.html');
    }
  });
};

module.exports = {
  slackOAuth,
};
