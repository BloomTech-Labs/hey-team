const CLIENT_ID = 270618182930.333388702161;
const CLIENT_SECRET = '8a86f76a3e4f7de24fae4dab9397848b';

// const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env,
const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport');
const JWT = require('jsonwebtoken');

signToken = () => {
  return JWT.sign(
    {
      iss: 'daviddesigns',
      sub: 1234,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    CLIENT_SECRET
  );
};

// setup the strategy using defaults
const slackOAuth = (req, res) => {
  const token = signToken();
  console.log('code', req.query);
  res.status(200).json({ token });
};

module.exports = {
  slackOAuth,
};
