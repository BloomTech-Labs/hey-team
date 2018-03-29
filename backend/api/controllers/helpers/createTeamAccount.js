const Account = require('../../models/accountModel');

const colors = require('colors');

module.exports = createTeamAccount = (body, req, res) => {
  console.log(body);
  const newTeam = new Account({
    team: {
      id: body.team.id,
      name: body.team.name,
      domain: body.team.domain,
      image: body.team.image_132,
    },
  });
  newAccount.save((err, newTeam) => {
    if (err) {
      res.status(403).json({ err: err.message });
    }
    // res.status(200).json({ newAccount });
  });
  res.redirect(__dirname + '/public/DOOKIE_TEAM_FACE.html');
};
