let helper = require('sendgrid').mail;
const async = require('async');
const Workspace = require('../models/workspaceModel');
const colors = require('colors');
const MySendGridToken = process.env.SENDGRID_TOKEN;

const sendEmail = (
	parentCallback,
	fromEmail,
	toEmails,
	subject,
	textContent,
	htmlContent
) => {
	const errorEmails = [];
	const successfulEmails = [];
	const sg = require('sendgrid')(MySendGridToken);
	async.parallel(
		[
			function(callback) {
				// Add to emails
				for (let i = 0; i < toEmails.length; i += 1) {
					// Add from emails
					const senderEmail = new helper.Email(fromEmail); // Add to email
					const toEmail = new helper.Email(toEmails[i]); // HTML Content
					const content = new helper.Content('text/html', htmlContent);
					const mail = new helper.Mail(senderEmail, subject, toEmail, content);
					var request = sg.emptyRequest({
						method: 'POST',
						path: '/v3/mail/send',
						body: mail.toJSON()
					});
					sg.API(request, function(err, response) {
						console.log('SendGrid');
						if (err) {
							console.log('Error response received');
						}
						console.log(response.statusCode);
						console.log(response.body);
						console.log(response.headers);
					});
				} // return
				callback(null, true);
			}
		],
		function(err, results) {
			console.log('Done');
		}
	);
	parentCallback(null, {
		successfulEmails: successfulEmails,
		errorEmails: errorEmails
	});
};
const emailSender = async (req, res, next) => {
	const { w_id, participants, context } = req.body;
	let emails = [];
	await Workspace.findById(w_id, (err, workspace) => {
		if (err) {
			res.status(422);
			res.json({ 'Error finding all members': err.message });
			return;
    }
    console.log(colors.red(workspace))
    // console.log(colors.blue(workspace.members))
		let memberArray = workspace.members;
		memberArray.forEach(member => {
			participants.forEach(user => {
				if (member.id === user) {
					emails.push(member.email);
				}
			});
		});
		// res.json(emails);
		console.log(emails);
  }).populate('members');
	async.parallel(
		[
			function(callback) {
				sendEmail(
					callback,
					// Email FROM
					'heyteam@heyteam.com',
					// Email TO
					emails,
					// Subject Line
					'Your HeyTeam billing',
					// Text Content
					'HeyTeam',
					`<p style="font-size: 32px;">${context}</p>`
					// `<p style="font-size: 32px;">Hello from HeyTeam! \n Your billing information for Team: 3DiceJob, is $9.99 for your monthly perscription</p>`
				);
			}
		],
		function(err, results) {
      if (err) {
        res.json({err: 'Error sending emails'})
      }
			res.send({
				success: true,
				message: 'Emails sent',
				successfulEmails: results[0].successfulEmails,
				errorEmails: results[0].errorEmails
			});
		}
	);
};
module.exports = {
	emailSender
};
