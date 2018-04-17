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

const parseSchedule = async (c, m) => {
  console.log(m);
  const w_id = c.workspace.toString();
  // await conversation.startConversation(w_id, c._id, m.id);
  const date = new Date();
  const currentWeekDay = weekDayMap[date.getDay()];
  if (c.schedule[currentWeekDay]) {
    let [hr, min] = c.schedule.time.split(':');
    if (c.schedule.modifier === 'PM') {
      if (hr >= 1 && hr < 12) {
        hr += 12;
      }
    }
    if (hr === date.getHours()) {
      if (min === date.getMinutes()) {
        await conversation.startConversation(c.workspace, c._id, m.id);
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
  // console.log(conversations);
};
