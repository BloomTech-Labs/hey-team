const request = require('request');
const Account = require('../../models/accountModel');
const createUserAccount = require('./createUserAccount');

const colors = require('colors');

const CLIENT_ID = '270618182930.333388702161';
const CLIENT_SECRET = '8a86f76a3e4f7de24fae4dab9397848b';

module.exports = login = (req, res, done) => {
  if (!req.query.code) {
    // access denied
    return;
  }
  // sets the data for the uri query
  let data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'https://d32ce379.ngrok.io/auth/login',
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
      const account = await Account.findOne(
        {
          'owner.access_token': body.access_token,
        }
        // function(err, model) {
        //   // console.log(colors.yellow(model._id));

        //   return model._id;
        // }
      );
      if (account) {
        // console.log(colors.yellow(account._id));
        // backend
        res.redirect(`https://d32ce379.ngrok.io`);
        // res.redirect(`http://localhost:3000/?doc_id=${account._id}`);
        // frontend
        // const url = new URL(window.location.href);
        // const params = new URLSearchParams(url.search.slice(1));
        // const id = params.get('doc_id');
        // localStorage.setItem('doc_id', id);
      } else {
        // console.log(colors.blue(res));
        createUserAccount(body, req, res, done);
      }
    }
    // res.redirect(__dirname + '/public/success.html');
  });
};
