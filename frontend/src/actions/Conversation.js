import axios from 'axios';

const URL = '';

const w_id = '5add171bf82fa1509c5407d9';

export const saveConversation = async c => {
  // console.log(c);
  try {
    await axios.post('http://localhost:3031/conversation/create', {
      w_id,
      c,
    });
    alert('saved');
  } catch (error) {}
};

export const updateConversation = async (c_id, c) => {
  // console.log(c);
  try {
    await axios.put('http://localhost:3031/conversation/update', {
      c_id,
      c,
    });
    alert('saved');
  } catch (error) {}
};

export const findConversation = async c_id => {
  // console.log(c);
  try {
    const res = await axios.post('http://localhost:3031/conversation/find', {
      c_id,
    });
    return res;
    alert('conversation found', res);
  } catch (error) {}
};

export const allConversations = async () => {
  try {
    const res = await axios.post('http://localhost:3031/conversation/all', {
      w_id,
    });
    return res;
  } catch (error) {}
};

export const deleteConversation = async (w_id, c_id) => {
  try {
    await axios.post('http://localhost:3031/conversation/delete', {
      w_id,
      c_id,
    });
  } catch (error) {}
};
