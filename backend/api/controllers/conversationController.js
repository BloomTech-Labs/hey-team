const { RTMClient, WebClient, IncomingWebhook } = require('@slack/client');
const async = require('async');
const rp = require('request-promise');

const url =
  'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(url);

const Conversation = require('../models/conversationModel');
const Response = require('../models/responseModel');
const Account = require('../models/accountModel');
const Member = require('../models/memberModel');

const colors = require('colors');

const createConversation = async (req, res) => {
  const { title, questions, users, schedule, a_id } = req.body;
  const participants = [];

  await Account.findById(a_id, function(err, model) {
    model.team.members.forEach(m => {
      // console.log(colors.yellow(m.name));
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
    schedule,
  });
  // console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    a_id,
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

  // await account.save(function(err, model, numAffected) {
  //   if (err) return handleError(err);
  //   console.log(numAffected, 'Success!');
  // });

  res.json(newConversation);
};

const deleteConversation = async (req, res) => {
  const { a_id, c_id } = req.body;
  const account = await Account.findById(a_id);
  account.conversations.forEach(c => {
    if (c._id.toString() === c_id) {
      account.conversations.remove(c);
    }
  });
  account.save();
  res.status(200);
};

const allConversations = async (req, res) => {
  const { a_id } = req.body;
  const account = await Account.findById(a_id);
  res.json(account.conversations);
};

const editConversation = async (req, res) => {
  const { a_id, c_id, conversation } = req.body;
  const newConversation = new Conversation(conversation);
  const account = await Account.findById(a_id);
  account.conversations.forEach(c => {
    if (c._id.toString() === c_id) {
      account.conversations.remove(c);
      account.conversations.push(newConversation);
      account.save();
      return;
    }
  });
  res.status(200);
};

const respondToConversation = async (req, res) => {
  const { a_id, c_id } = req.body;
  const account = await Account.findById(a_id);
};

const addResponses = async (req, res) => {
  const { response, user, a_id } = req.body;

  await Account.findById(a_id, function(err, model) {
    model.conversations.forEach(c => {
      c.for;
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
    schedule,
  });
  // console.log(colors.cyan(newConversation));
  await Account.findByIdAndUpdate(
    a_id,
    { $push: { conversations: newConversation } },
    { safe: true, upsert: true, new: true },
    function(err, model) {
      // console.log('err', err);
      // console.log('model', model);
    }
  );
  res.json(newConversation);
};

const startConversation = async (req, res) => {
  const { a_id, c_id, users } = req.body;
  let questions = [];
  const answers = [];
  const token = 'xoxb-334119064773-rgcvNMZI70rMnTd22lmXGryY';
  const rtm = new RTMClient(token);
  const web = new WebClient(token);
  // get owner id and dm owner response
  // get user and dm
  const dm = await web.im.open({ user: 'U9TKS1XJN' });
  console.log(dm.channel.id);

  const convo = await Account.findById({
    _id: a_id,
  });
  console.log(1);
  rtm.start();
  web.channels
    .list()
    .then(res => {
      // const channel = res.channels.find(c => c.is_member);
      console.log('Channel', 'res');
    })
    .catch(console.error);

  // convo.conversations.forEach(c => {
  // if (schedule) {}
  //   c.participants.forEach(p => {});
  // });
  // rtm.subscribePresence('U9TKS1XJN');
  convo.conversations.forEach(c => {
    console.log(c._id);
    if (c._id.toString() === c_id) {
      questions = c.questions;
    }
  });

  const conversationId = dm.channel.id;
  const queLength = questions.length;
  let currentQuestion = 0;

  rtm
    .sendMessage(questions[currentQuestion], conversationId)
    .then(res => {
      currentQuestion++;
    })
    .catch(console.error);

  rtm.on('message', event => {
    // console.log('event', event);
    answers.push(event.text);
    if (currentQuestion < queLength) {
      rtm
        .sendMessage(questions[currentQuestion], conversationId)
        .then(res => {
          // console.log('Message sent: ', res);
          currentQuestion++;
        })
        .catch(console.error);
    } else {
      rtm.disconnect();

      const newConversation = new Conversation({});
      const newResponse = new Response({
        user: 'test',
        questions,
        answers,
      });

      convo.conversations.push(newConversation);
      convo.conversations.remove(newConversation);
      convo.conversations[0].responses.push({
        submittedOn: new Date(),
        user: 'String',
        avatar: 'String',
        questions,
        answers,
      });

      convo.save();

      attachments = [];
      questions.forEach((q, i) => {
        attachments.push({
          title: questions[i],
          text: answers[i],
        });
      });
      ///////////////////////////////////////

      web.chat
        .postMessage({
          channel: conversationId,
          text: "Today's Standup Questionnaire",
          attachments,
          // attachments: [
          // {
          //   fallback: 'Required plain-text summary of the attachment.',
          //   color: '#36a64f',
          //   author_name: 'Team Lead Name',
          //   author_link: 'http://flickr.com/bobby/',
          //   author_icon: 'http://flickr.com/icons/bobby.jpg',
          //   title: 'Slack API Documentation',
          //   title_link: 'https://api.slack.com/',
          //   text: 'Optional text that appears within the attachment',
          //   fields: [
          //     {
          //       title: 'Priority',
          //       value: 'High',
          //       short: false,
          //     },
          //   ],
          //   image_url: 'http://my-website.com/path/to/image.jpg',
          //   thumb_url: 'http://example.com/path/to/thumb.png',
          //   footer: 'Slack API',
          //   footer_icon:
          //     'https://platform.slack-edge.com/img/default_application_icon.png',
          //   ts: 123456789,
          // },
          // ],
        })
        .then(res => {
          // `res` contains information about the posted message
          console.log('Message sent: ', res.ts);
        })
        .catch(console.error);

      /////////////////////////////////////////
    }
  });
};

const test = async (req, res) => {
  const { a_id, c_id, users } = req.body;
  // return res.send('hey');
  let questions = [];
  const answers = [];
  const token = 'xoxb-334119064773-rgcvNMZI70rMnTd22lmXGryY';
  const rtm = new RTMClient(token);
  const web = new WebClient(token);
  // get owner id and dm owner response
  // get user and dm
  const dm = await web.im.open({ user: 'U9TKS1XJN' });
  console.log(dm.channel.id);

  const convo = await Account.findById({
    _id: a_id,
  });
  console.log(1);
  rtm.start();
  web.channels
    .list()
    .then(res => {
      // const channel = res.channels.find(c => c.is_member);
      console.log('Channel', 'res');
    })
    .catch(console.error);

  // convo.conversations.forEach(c => {
  // if (schedule) {}
  //   c.participants.forEach(p => {});
  // });
  // rtm.subscribePresence('U9TKS1XJN');
  convo.conversations.forEach(c => {
    console.log(c._id);
    if (c._id.toString() === c_id) {
      questions = c.questions;
    }
  });
  const conversationId = dm.channel.id;
  const queLength = questions.length;
  let currentQuestion = 0;

  rtm.on('message', event => {
    console.log(event);
  });

  // rtm
  //   .sendMessage(questions[currentQuestion], conversationId)
  //   .then(res => {
  //     currentQuestion++;
  //   })
  //   .catch(console.error);

  // rtm.on('message', event => {
  //   // console.log('event', event);
  //   answers.push(event.text);
  //   if (currentQuestion < queLength) {
  //     rtm
  //       .sendMessage(questions[currentQuestion], conversationId)
  //       .then(res => {
  //         // console.log('Message sent: ', res);
  //         currentQuestion++;
  //       })
  //       .catch(console.error);
  //   } else {
  //     rtm.disconnect();

  //     const newConversation = new Conversation({});
  //     const newResponse = new Response({
  //       user: 'test',
  //       questions,
  //       answers,
  //     });

  //     convo.conversations.push(newConversation);
  //     convo.conversations.remove(newConversation);
  //     convo.conversations[0].responses.push({
  //       submittedOn: new Date(),
  //       user: 'String',
  //       avatar: 'String',
  //       questions,
  //       answers,
  //     });

  //     convo.save();

  //     attachments = [];
  //     questions.forEach((q, i) => {
  //       attachments.push({
  //         title: questions[i],
  //         text: answers[i],
  //       });
  //     });
  //     ///////////////////////////////////////

  //     web.chat
  //       .postMessage({
  //         channel: conversationId,
  //         text: "Today's Standup Questionnaire",
  //         attachments,
  //       })
  //       .then(res => {
  //         // `res` contains information about the posted message
  //         console.log('Message sent: ', res.ts);
  //       })
  //       .catch(console.error);

  //     /////////////////////////////////////////
  //   }
  // });
  res.send('heyyyy');
};

const sendToParticipant = async (a_id, c_id, users) => {};

const initiate = async (req, res) => {
  const { a_id, c_id, users } = await req.body;
  const account = await Account.findById(a_id);

  const token = 'xoxb-334119064773-rgcvNMZI70rMnTd22lmXGryY';
  // const rtm = new RTMClient(token);
  const web = new WebClient(token);
  // get owner id and dm owner response
  // get user and dm
  let requests = [];
  const getit = async position => {
    if (position === users.length) {
      return;
    } else {
      const dm = await web.im.open({ user: user[position] }).then(r => {
        console.log(r);
      });
      position++;
      getit(position);
    }
  };

  getit(0);
  // users.forEach(u => {
  //   let i = 0;
  //   const dm = web.im.open({ user: u });
  //   while (i < 50000) {
  //     console.log(i);
  //     i++;
  //   }
  //   console.log(dm);
  // console.log(dm.channel.id);
  // account.conv_map.push({
  //   user_id: u,
  //   c_id,
  // });
  // async.each(account.conversations, c => {
  //   if (c._id.toString() === c_id) {
  //     web.chat
  //       .postMessage({
  //         channel: dm.channel.id,
  //         text: c.questions[0],
  //       })
  //       .then(res => {
  //         // `res` contains information about the posted message
  //         console.log('Message sent: ', res.ts);
  //       })
  //       .catch(console.error);
  //   }
  // });
  // });

  // Promise.all(requests)
  //   .then(p => {
  //     p.forEach(stuff => {
  //       console.log('stuff', stuff);
  //     });
  //   })
  //   .catch(console.error);

  // account.save();
  // console.log(account.conv_map);
  res.send(requests);
};

const quicktest = async (req, res) => {
  // console.log(req.body);
  res.send(req.body);
};

module.exports = {
  createConversation,
  deleteConversation,
  allConversations,
  editConversation,
  respondToConversation,
  startConversation,
  test,
  quicktest,
  initiate,
};
