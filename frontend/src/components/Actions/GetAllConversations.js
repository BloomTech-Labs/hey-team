import axios from 'axios';


const w_id = localStorage.getItem('doc_id');
export const getAllConversations = async conversations => {
    try {
        const res = await axios.post('https://4f2abc0c.ngrok.io/conversation/all', {
        w_id: '5ad4cebecb2cb341f09211ee',
        conversations,
        });
        return res;
    } catch (error) {}
};

///users/find