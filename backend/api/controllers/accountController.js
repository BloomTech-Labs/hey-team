const loginHelper = require('./helpers/login');
createUserAccountHelper = require('./helpers/createUserAccount');
const Account = require('../models/accountModel');

const createUserAccount = (req, res) => {

	if (!req.query.code) {
		// access denied
		return;
	}
	var data = {
		form: {
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET,
			redirect_uri: 'https://d32ce379.ngrok.io/auth/login',
			code: req.query.code
		}
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
					'owner.access_token': newBody.access_token
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
						image: newBody.user.image_192
					}
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
        memberObj.avatar = member.profile.image_192;
        foundMember.push(memberObj);
      }
		});
		res.json(foundMember);
	});
}

const login = (req, res) => {
	return loginHelper(req, res);
};

module.exports = {
  createUserAccount,
	getAllMembers,
  getOneMember,
	login
};
