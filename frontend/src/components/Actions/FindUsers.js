import axios from 'axios';

const ngrokUrl = 'https://4f2abc0c.ngrok.io';
const w_id = localStorage.getItem('doc_id');
export const findUsers = async searchTerm => {
    try {
        const res = await axios.post('https://ab5a9f15.ngrok.io/users/all', {
        w_id: '5ad4cebecb2cb341f09211ee',
        searchTerm,
        });
        return res;
    } catch (error) {}
};

///users/find