import axios from 'axios';

const URL = 'https://035404a8.ngrok.io';
// const URL = 'https://035404a8.ngrok.io';
// const w_id = localStorage.getItem('doc_id');
export const findUsers = async (w_id, searchTerm) => {
  try {
    const res = await axios.post(`${URL}/users/find`, {
      w_id,
      searchTerm,
    });
    return res;
  } catch (error) {}
};
