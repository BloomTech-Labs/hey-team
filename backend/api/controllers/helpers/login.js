const request = require('request');
const Account = require('../../models/accountModel');
const createAccount = require('./createUserAccount');

const colors = require('colors');

const CLIENT_ID = '270618182930.333388702161';
const CLIENT_SECRET = '8a86f76a3e4f7de24fae4dab9397848b';

module.exports = login = (req, res) => {
  if (!req.query.code) {
    // access denied
    return;
  }
  // sets the data for the uri query
  let data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'https://49828635.ngrok.io/auth/account',
      code: req.query.code,
    },
  };

  request.post('https://slack.com/api/oauth.access', data, async function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode === 200) {
      body = JSON.parse(body);
      const account = await Account.findOne({
        'owner.access_token': body.access_token,
      });
      if (account) {
        res.redirect(__dirname + '/public/logedin.html');
      } else {
        createAccount(body);
      }
    }
  });
};
