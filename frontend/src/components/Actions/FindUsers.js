import axios from 'axios';

// const URL = 'https://3259afd8.ngrok.io/';
const a_id = localStorage.getItem('doc_id');
export const findUsers = async searchTerm => {
    try {
        const res = await axios.post('https://3259afd8.ngrok.io/users/find', {
        a_id: '5ace2f3b4fe2223b887ec9f9',
        searchTerm,
        });
        return res;
    } catch (error) {}
};

