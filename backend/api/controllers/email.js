let helper = require('sendgrid').mail;
const async = require('async');
const Account = require('../models/accountModel');
const colors = require('colors');

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
	const sg = require('sendgrid')(
		'MySendGridToken'
	);
	async.parallel(
		[
			function(callback) {
				// Add to emails
				for (let i = 0; i < toEmails.length; i += 1) {
					// Add from emails
					const senderEmail = new helper.Email(fromEmail);
					// Add to email
					const toEmail = new helper.Email(toEmails[i]);
					// HTML Content
					const content = new helper.Content('text/html', htmlContent);
					const mail = new helper.Mail(senderEmail, subject, toEmail, content);
					var request = sg.emptyRequest({
						method: 'POST',
						path: '/v3/mail/send',
						body: mail.toJSON()
					});
					sg.API(request, function(error, response) {
						console.log('SendGrid');
						if (error) {
							console.log('Error response received');
						}
						console.log(response.statusCode);
						console.log(response.body);
						console.log(response.headers);
					});
				}
				// return
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
  const { a_id, users } = req.body;
  let emails = [];

  await Account.findById(a_id, (err, account) => {
    if (err) {
      res.status(422);
      res.json({ 'Error finding all users': err.message });
      return;
    }
    let memberArray = account.team.members;
    memberArray.forEach(member => {
      users.forEach(user => {
        if (member.id === user) {
          emails.push(member.profile.email);
        }
      })
    });
    // res.json(emails);
    console.log(emails);
  });

  async.parallel(
    [
      function(callback) {
        sendEmail(
          callback,
          // Email FROM
          'travisj_jones@hotmail.com',
          //Email TO
          emails,
          'Test from SendGrid API',
          'YOOOOOO',
          '<p style="font-size: 32px;">Can you <b>smell</b> what Travis is COOKIN?!</p>'
        );
      }
    ],
    function(err, results) {
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
  emailSender,
};
