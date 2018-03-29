const Account = require('../../models/accountModel');

const colors = require('colors');

module.exports = createUserAccount = (body, req, res) => {
  console.log(body);
  const newAccount = new Account({
    owner: {
      access_token: body.access_token,
      name: body.user.name,
      id: body.user.id,
      email: body.user.email,
      image: body.user.image_192,
    },
  });
  newAccount.save((err, newAccount) => {
    if (err) {
      return res.status(403).json({ err: err.message });
    }
    // res.status(200).json({ newAccount });
  });
  res.redirect(__dirname + '/public/success.html');
};
