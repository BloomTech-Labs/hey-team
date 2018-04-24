import axios from 'axios';

const URL = 'https://035404a8.ngrok.io';

const w_id = localStorage.getItem('doc_id');

// export const saveConversation = async c => {
//   // console.log(c);
//   try {
//     const res = await axios.post('http://localhost:3031/stripe', {
//       w_id,
//       token,
//     });
//     alert('Payment Successful');
//   } catch (error) {}
// };

export const hasActiveSubscription = async w_id => {
  try {
    const res = await axios.post(`${URL}/auth/active`, {
      w_id,
    });
    return res;
  } catch (error) {
    console.error;
  }
};
