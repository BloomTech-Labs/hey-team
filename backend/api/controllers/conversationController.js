const Conversation = require('../models/conversationModel');
const Account = require('../models/accountModel');
const Member = require('../models/memberModel');

const colors = require('colors');

const createConversation = async (req, res) => {
	const { title, questions, users, schedule } = req.body;
	const participants = [];

	await Account.findById('5ac2b130823407196bf95e28', function(err, model) {
		console.log(colors.yellow(model.team.members[0].name));
		model.team.members.forEach(m => {
			console.log(colors.yellow(m.name));
			users.forEach(u => {
				if (m.id === u) {
					participants.push(m);
				}
			});
		});
	});
	// if (query) participants.push(query.select('name'));

	const newConversation = new Conversation({
		title,
		questions,
		participants,
		schedule
	});
	console.log(colors.cyan(newConversation));
	await Account.findByIdAndUpdate(
		'5ac2b130823407196bf95e28',
		{ $push: { conversations: newConversation } },
		{ safe: true, upsert: true, new: true },
		function(err, model) {
			// console.log('err', err);
			// console.log('model', model);
		}
	);
	// const account = await Account.findById('5abd7623729a5b2bf4c3a8db');
	// await account.conversations.push(newConversation);
	// await account.save();

	// const c = await Conversation.find({});
	// console.log(c);

	// console.log(account.conversations[0]);
	res.json(newConversation);
};

const deleteConversation = async (req, res) => {
  const { account_id } = req.params.account_id;
	await Conversation.findByIdAndRemove(account_id, (err, convo) => {
		if (err) return res.status(500).send(err);
		const response = {
			message: 'Conversation successfully deleted',
			id: account_id
		};
		return res.status(200).send(response);
	});
};

const updateConversation = async (req, res) => {
  const { account_id } = req.params.account_id;
  await Conversation.findByIdAndUpdate(account_id, 
    // whatever changes come from the front-end;
    req.body,
		// an option that asks mongoose to return the updated version
		// of the document instead of the pre-updated one.
		{ new: true },
		(err, convo) => {
			if (err) return res.status(500).send(err);
			return res.send(convo);
		}
	);
};

module.exports = {
	createConversation,
  deleteConversation,
  updateConversation
};
