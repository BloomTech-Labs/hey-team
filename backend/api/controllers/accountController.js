const loginHelper = require('./helpers/login');
createUserAccountHelper = require('./helpers/createUserAccount');

const createUserAccount = (req, res) => {
  if (!req.query.code) {
    // access denied
    return;
  }
  var data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'https://b63c8b78.ngrok.io/auth/login',
      code: req.query.code,
    },
  };
  request.post('https://slack.com/api/oauth.access', data, async function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      const newBody = JSON.parse(body);
      console.log(newBody);
      const foundAccount = await Account.findOne(
        {
          'owner.access_token': newBody.access_token,
        },
        (err, doc) => {
          console.log('doc', doc);
        }
      );
      if (foundAccount) {
        console.log('Account already made!');
        return res.json({ err: 'Account already exists!' });
      } else {
        const newAccount = new Account({
          owner: {
            access_token: newBody.access_token,
            name: newBody.user.name,
            id: newBody.user.id,
            email: newBody.user.email,
            image: newBody.user.image_192,
          },
        });
        newAccount.save((err, newAccount) => {
          if (err) {
            return res.status(403).json({ err: err.message });
          }
          // res.status(200).json({ newAccount });
        });
        res.redirect(__dirname + '/public/success.html');
      }
    }
  });
};

const testbot = (req, res) => {
  console.log('test bot is the best ham in the house');
  res.status(200).send('bots in the house!');
};

const login = (req, res) => {
  return loginHelper(req, res);
};

module.exports = {
  createUserAccount,
  testbot,
  login,
};
