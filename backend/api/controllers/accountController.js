const loginHelper = require('./helpers/login');
createUserAccountHelper = require('./helpers/createUserAccount');

const createUserAccount = (req, res) => {
  return createUserAccountHelper(req, res);
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
