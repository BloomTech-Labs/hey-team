import axios from 'axios';

const ngrokUrl = 'https://64e527cb.ngrok.io';
const w_id = localStorage.getItem('doc_id');
export const findUsers = async searchTerm => {
    try {
        const res = await axios.post('https://64e527cb.ngrok.io/users/all', {
        w_id: '5ad4cd023695c8d6e11b6a55',
        searchTerm,
        });
        return res;
    } catch (error) {}
};

///users/find