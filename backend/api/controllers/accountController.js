const Account = require('../models/accountModel');

const createUserAccount = (req, res) => {
  console.log('code', req.query.code);
  const request = req;
  res.status(200).send('hit it');
};

const getSlackStuff = (req, res) => {};

module.exports = {
  createUserAccount,
};
