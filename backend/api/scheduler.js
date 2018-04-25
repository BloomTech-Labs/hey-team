/**
 * This application does not handle switching
 * between DST and Standard Time
 */

const colors = require('colors');

const Conversation = require('./models/conversationModel');
const Workspace = require('./models/workspaceModel');
const conversation = require('./controllers/conversationController');

const weekDayMap = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
};

const createOffset = date => {
  let sign = date.getTimezoneOffset() > 0 ? '-' : '+';
  let offset = Math.abs(date.getTimezoneOffset());
  let hours = Math.floor(offset / 60);
  return sign + hours;
};

const parseSchedule = async (c, m) => {
  // console.log(m.real_name);
  const date = new Date();
  const currentWeekDay = weekDayMap[date.getDay()];

  const serverLocale = parseInt(createOffset(date));
  const conversationLocale = c.schedule.tz;
  const localeAdjustment = conversationLocale - serverLocale;

  if (c.schedule[currentWeekDay]) {
    let [hr, min] = c.schedule.time.split(':');
    hr = parseInt(hr);
    min = parseInt(min);
    // console.log(hr, min, c.schedule.modifier);
    // console.log(serverLocale, conversationLocale);
    if (serverLocale > conversationLocale) {
      hr += localeAdjustment;
      // console.log('server time is ahead of conversation time');
    } else {
      hr -= localeAdjustment;
      // console.log('server time is behind conversation time');
    }
    // console.log(hr);
    if (c.schedule.modifier === 'PM') {
      if (hr >= 1 && hr < 12) {
        hr += 12;
      }
    }

    if (hr === date.getHours()) {
      // console.log(hr);
      if (min === date.getMinutes()) {
        // console.log(min);
        await conversation.startConversation(c._id, m.id);
      }
    }
  }
};

const startScheduler = async () => {
  // console.log('*************************************'.yellow);
  const conversations = await Conversation.find().populate('members');
  conversations.forEach(c => {
    c.members.forEach(m => {
      parseSchedule(c, m);
    });
  });
};

const checkLastPayment = async w => {
  const date = Date.parse(new Date());
  const paidOn = Date.parse(w.info.paidOn);

  const lastPayment = Math.floor((date - paidOn) / (1000 * 60 * 60 * 24));
  if (lastPayment > 30) {
    console.log;
    await Workspace.findByIdAndUpdate(w._id, {
      'info.active': false,
    });
  }
  return;
};

const paymentScheduler = async () => {
  const workspaces = await Workspace.find();
  // console.log('here'.blue);
  workspaces.forEach(w => {
    checkLastPayment(w);
  });
};

module.exports = {
  startScheduler,
  paymentScheduler,
};
