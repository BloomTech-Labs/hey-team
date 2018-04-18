const { WebClient } = require('@slack/client');
const colors = require('colors');
const util = require('util');

const initializeConversation = require('./helpers/initializeConversation');
const createQuestion = require('./helpers/createQuestion');

const Conversation = require('../models/conversationModel');
const Workspace = require('../models/workspaceModel');
const Question = require('../models/questionModel');
const Response = require('../models/responseModel');
const Member = require('../models/memberModel');

const createConversation = async (req, res) => {
	const { c, w_id } = req.body;
	console.log(c.members);
	// find all members and add a conversation to member object
	/** Golden */
	const members = await Member.find({
		id: { $in: c.members }
	});

	const conversation = await new Conversation({
		workspace: w_id,
		members: members,
		title: c.title,
		broadcast: c.broadcast,
		questions: c.questions,
		schedule: c.schedule
	});

	await conversation.save();

	// questions.forEach(q => {
	//   console.log('calling createQuestion');
	//   createQuestion(w_id, conversation._id, q);
	// });

	console.log('push conversation');
	await Workspace.findByIdAndUpdate(w_id, {
		$push: { conversations: conversation._id }
	})
		.then('pushed conversation to workspace')
		.catch(console.error);

	res.send(conversation);
};

const deleteConversation = async (req, res) => {
	const { w_id, c_id } = req.body;


  await Conversation.findByIdAndRemove(c_id);

  await Workspace.findByIdAndUpdate(w_id, {
    $pull: { conversations: c_id },
  });

  res.send('OK');
};

const getMemberFromId = id => {
	const member = Member.findOne({ id: id });
	if (member.id) {
		return member.id;
	} else {
		return false;
	}
};

const editConversation = async (req, res) => {
	const { c_id, c } = req.body;
	const dbMembers = [];
	await c.members.forEach(m => {
		const foundMemberId = getMemberFromId(m);
		if (foundMemberId) {
			dbMembers.push(foundMemberId);
		}
	});

	const conversation = await Conversation.findByIdAndUpdate(c_id, {
		title: c.title,
		members: dbMembers,
		questions: c.questions,
		schedule: c.schedule,
		responses: []
	});
	res.send('OK');
};

const allConversations = async (req, res) => {
	const { w_id } = req.body;
	/** Golden  */
	Workspace.findById(w_id)
		.populate({
			path: 'conversations',
			populate: { path: 'responses' }
		})
		.populate({
			path: 'conversations',
			populate: { path: 'members' }
		})
		.then(w => {
			res.send(w.conversations);
		})
		.catch(console.error);
};

const startConversation = async (c_id, m) => {
  initializeConversation(c_id, m);
};

// const startConversation = async (req, res) => {
// 	const { c_id, members } = req.body;
// 	members.forEach(m_id => {
// 		initializeConversation(c_id, m_id);
// 	});
// 	res.send('probably worked');
// };

const updateConversation = async body => {
	if (body.event.bot_id) {
		return;
	}

	const web = new WebClient(process.env.XOXB);
	const dm = await web.im.open({ user: body.event.user });
	const history = await web.im.history({ channel: dm.channel.id, count: 2 });

	if (history.messages[1].user === body.event.user) {
		return;
	}
	const [q_count, c_id] = history.messages[1].attachments[0].fallback.split(
		','
	);

	const member = await Member.findOne({ id: body.event.user });
	const conversation = await Conversation.findById(c_id).populate('responses');
	let numResponses = 0;

	conversation.responses.forEach(r => {
		if (r.member.toString() === member._id.toString()) {
			numResponses++;
		}
	});

	if (numResponses === conversation.questions.length - 1) {
		const newResponse = await new Response({
			conversation: c_id,
			member: member._id,
			time_stamp: body.event.ts,
			response: body.event.text
		});
		await newResponse.save();

		await Conversation.findByIdAndUpdate(c_id, {
			$push: { responses: newResponse._id }
    });
    
		const cr = await Conversation.findById(c_id).populate('responses');
    const broadcast = await web.im.open({ user: cr.broadcast });
    let certainMemberResponses = [];
    let questionIndex = 0;

		cr.responses.forEach((r) => {
			let attatchmentObj = {};
			if (member._id.toString() === r.member.toString()) {
				attatchmentObj = {
					fallback: `${conversation.questions[questionIndex]}\n${r.response}`,
					text: `${r.response}`,
					title: `${conversation.questions[questionIndex]}`,
					color: 'c0dadb',
					mrkdwn_in: ['text']
        };
				certainMemberResponses.push(attatchmentObj);
        questionIndex++;
			}
    });
    
		web.chat
			.postMessage({
				channel: broadcast.channel.id,
				text: `Hey! This is ${member.real_name}'s standup for ${cr.title}:`,
				attachments: certainMemberResponses
			})
			.then(res => {})
			.catch(console.error);
		return;
	} else if (numResponses < conversation.questions.length - 1) {
		const newResponse = await new Response({
			conversation: c_id,
			member: member._id,
			time_stamp: body.event.ts,
			response: body.event.text
		});
		await newResponse.save();

		await Conversation.findByIdAndUpdate(c_id, {
			$push: { responses: newResponse._id }
		});
		web.chat
			.postMessage({
				channel: dm.channel.id,
				text: `${conversation.questions[numResponses + 1]}`,
				attachments: [
					{
						fallback: `${conversation.questions.length},${c_id}`
					}
				]
			})
			.then(res => {})
			.catch(console.error);
		return;
	} else if (numResponses === conversation.questions.length) {
		return;
	}
};

const im = (req, res) => {
	updateConversation(req.body);
	/** Golden */
	const stuff = util.inspect(req.body, false, null);
	console.log(stuff);
	res.send(req.body);
};

module.exports = {
	createConversation,
	deleteConversation,
	editConversation,
	allConversations,
	startConversation,
	updateConversation,
	im,
};
