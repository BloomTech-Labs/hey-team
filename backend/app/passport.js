const CLIENT_ID = 270618182930.333388702161;
const CLIENT_SECRET = '8a86f76a3e4f7de24fae4dab9397848b';

// const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env,
const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport');

// setup the strategy using defaults
passport.use(
  new SlackStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      // optionally persist profile data
      console.log(accessToken, refreshToken, profile);
      done(null, profile);
    }
  )
);
