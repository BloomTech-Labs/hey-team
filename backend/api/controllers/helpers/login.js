const request = require('request');
const Account = require('../../models/accountModel');
const createUserAccount = require('./createUserAccount');

const colors = require('colors');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

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
      redirect_uri: 'https://hey-test-team.herokuapp.com/auth/login',
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
      console.log(body);
      const account = await Account.findOne(
        {
          'owner.access_token': body.access_token,
        }
        // function(err, model) {

        //   return model._id;
        // }
      );
      if (account) {
        // console.log(colors.yellow(account._id));
        // backend
        res.redirect(`https://hey-test-team.herokuapp.com`);
        // res.redirect(`http://localhost:3000/?doc_id=${account._id}`);
        // frontend
        // const url = new URL(window.location.href);
        // const params = new URLSearchParams(url.search.slice(1));
        // const id = params.get('doc_id');
        // localStorage.setItem('doc_id', id);
      } else {
        createUserAccount(body, req, res, done);
      }
    }
    // res.redirect(__dirname + '/public/success.html');
  });
};
