import axios from 'axios';


const w_id = localStorage.getItem('doc_id');
export const getAllConversations = async conversations => {
    try {
        const res = await axios.post('https://64e527cb.ngrok.io/conversation/all', {
        w_id: '5ad4cd023695c8d6e11b6a55',
        conversations,
        });
        return res;
    } catch (error) {}
};

///users/find