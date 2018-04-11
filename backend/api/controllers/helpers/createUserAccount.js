const { WebClient } = require('@slack/client');

const Account = require('../../models/accountModel');
const Member = require('../../models/memberModel');

const colors = require('colors');

module.exports = createUserAccount = async (body, req, res) => {
  const token = body.access_token;
  const web = await new WebClient(token);
  const team = await web.users.list();
  const teamInfo = await web.team.info();

  let adminName = '';
  let adminImage = '';
  let timezone = '';
  team.members.forEach(member => {
    if (member.id === body.user_id) {
      adminName = member.real_name;
      adminImage = member.profile.image_192;
      timezone = member.tz_offest;
    }
  });

  const newAccount = await new Account({
    owner: {
      access_token: body.access_token,
      id: body.user_id,
      name: adminName,
      // email: body.user.email,
      timezone: timezone,
      image: adminImage,
    },
    team: {
      id: teamInfo.team.id,
      name: teamInfo.team.name,
      domain: teamInfo.team.domain,
      image: teamInfo.team.icon.image_132,
      members: team.members,
      // members: test,
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
