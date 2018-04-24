import axios from 'axios';

// const URL = 'http://localhost:3031';
const URL = 'https://035404a8.ngrok.io';

const w_id = localStorage.getItem('doc_id');

export const saveConversation = async c => {
  // console.log(c);
  try {
    await axios.post(`${URL}/conversation/create`, {
      w_id,
      c,
    });
    alert('saved');
  } catch (error) {}
};

export const updateConversation = async (c_id, c) => {
  // console.log(c);
  try {
    await axios.put(`${URL}/conversation/update`, {
      c_id,
      c,
    });
    alert('saved');
  } catch (error) {}
};

export const findConversation = async c_id => {
  // console.log(c);
  try {
    const res = await axios.post(`${URL}/conversation/find`, {
      c_id,
    });
    return res;
    alert('conversation found', res);
  } catch (error) {}
};

export const allConversations = async () => {
  try {
    const res = await axios.post(`${URL}/conversation/all`, {
      w_id,
    });
    return res;
  } catch (error) {}
};

export const deleteConversation = async (w_id, c_id) => {
  try {
    await axios.post(`${URL}/conversation/delete`, {
      w_id,
      c_id,
    });
  } catch (error) {}
};
