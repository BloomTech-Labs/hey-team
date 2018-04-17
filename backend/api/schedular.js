/**
 * This application does not handle switching
 * between DST and Standard Time
 */

const colors = require('colors');

const Conversation = require('./models/conversationModel');
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
  const date = new Date();
  const currentWeekDay = weekDayMap[date.getDay()];

  const serverLocale = parseInt(createOffset(date));
  const conversationLocale = c.schedule.tz;
  const localeAdjustment = conversationLocale - serverLocale;

  if (c.schedule[currentWeekDay]) {
    let [hr, min] = c.schedule.time.split(':');
    hr = parseInt(hr);
    min = parseInt(min);
    if (serverLocale > conversationLocale) {
      hr += localeAdjustment;
      // console.log('server time is ahead of conversation time');
    } else {
      hr -= localeAdjustment;
      // console.log('server time is behind conversation time');
    }

    if (c.schedule.modifier === 'PM') {
      if (hr >= 1 && hr < 12) {
        hr += 12;
      }
    }

    if (hr === date.getHours()) {
      if (min === date.getMinutes()) {
        await conversation.startConversation(c._id, m.id);
      }
    }
  }
};

module.exports = startSchedular = async () => {
  const conversations = await Conversation.find().populate('members');
  conversations.forEach(c => {
    c.members.forEach(m => {
      parseSchedule(c, m);
    });
  });
};
