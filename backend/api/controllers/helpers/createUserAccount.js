const { WebClient } = require('@slack/client');

const Account = require('../../models/accountModel');

const colors = require('colors');

module.exports = createUserAccount = async (body, req, res) => {
  console.log(body);
  const web = await new WebClient(body.access_token);
  const team = await web.users.list();
  console.log(team);
  const newAccount = await new Account({
    owner: {
      access_token: body.access_token,
      name: body.user.name,
      id: body.user.id,
      email: body.user.email,
      image: body.user.image_192,
    },
    team: {
      id: body.team.id,
      name: body.team.name,
      domain: body.team.domain,
      image: body.team.image_132,
      members: team.members,
    },
  });
  await newAccount.save((err, newAccount) => {
    if (err) {
      res.status(403).json({ err: err.message });
    }
    // res.status(200).json({ newAccount });
  });
  res.redirect(__dirname + '/public/DOOKIE_BUTTHAM.html');
};
