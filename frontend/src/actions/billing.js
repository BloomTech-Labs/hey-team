import axios from 'axios';

const URL = '';

const w_id = '5add171bf82fa1509c5407d9';

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
    const res = await axios.post('http://localhost:3031/auth/active', {
      w_id,
    });
    return res;
  } catch (error) {
    console.error;
  }
};
