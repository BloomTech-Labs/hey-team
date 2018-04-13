const loginHelper = require('./helpers/login');
createUserAccountHelper = require('./helpers/createUserAccount');
const Account = require('../models/accountModel');
const colors = require('colors');

const createUserAccount = (req, res) => {
  if (!req.query.code) {
    // access denied
    console.log('NO CODE!!!!');

    return;
  }
  var data = {
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'https://3259afd8.ngrok.io/auth/login',
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

const getAllMembers = (req, res) => {
  const { a_id } = req.body;
  Account.findById(a_id, (err, member) => {
    if (err) {
      res.status(422);
      res.json({ 'Error finding all users': err.message });
      return;
    }
    const allMembers = [];
    let memberArray = member.team.members;
    memberArray.forEach(member => {
      const memberObj = {};
      memberObj.real_name = member.real_name;
      memberObj.username = member.name;
      memberObj._id = member.id;
      memberObj.tz_offset = member.tz_offset;
      memberObj.tz_label = member.tz_label;
      memberObj.avatar = member.profile.image_192;
      allMembers.push(memberObj);
      console.log(memberObj);
    });
    res.json(allMembers);
  });
};

const getOneMember = (req, res) => {
  const { a_id, user_id } = req.body;
  Account.findById(a_id, (err, members) => {
    if (err) {
      res.status(422);
      res.json({ 'Error finding all users': err.message });
      return;
    }
    const foundMember = [];
    let memberArray = members.team.members;
    memberArray.forEach(member => {
      const memberObj = {};
      if (member.id === user_id) {
        memberObj.real_name = member.real_name;
        memberObj.username = member.name;
        memberObj._id = member.id;
        memberObj.tz_offset = member.tz_offset;
        memberObj.tz_label = member.tz_label;
        memberObj.avatar = member.profile.image_192;
        foundMember.push(memberObj);
      }
    });
    res.json(foundMember);
  });
};

const getAccountData = (req, res) => {
  const { a_id } = req.body;
  Account.findById(a_id, (err, account) => {
    if (err) {
      res.status(422);
      res.json({ 'Error finding all users': err.message });
      return;
    }
    const accountData = [];
    const memberObj = {};
    memberObj.team_name = account.team.name;
    memberObj.domain = account.team.domain;
    memberObj.team_id = account.team.id;
    memberObj.team_image = account.team.image;
    memberObj.owner_name = account.owner.name;
    memberObj.owner_id = account.owner.id;
    memberObj.owner_email = account.owner.email;
    memberObj.owner_image = account.owner.image;
    accountData.push(memberObj);
    res.json(accountData);
  });
};

const login = (req, res) => {
  return loginHelper(req, res);
};

module.exports = {
  createUserAccount,
  getAccountData,
  getAllMembers,
  getOneMember,
  login,
};
