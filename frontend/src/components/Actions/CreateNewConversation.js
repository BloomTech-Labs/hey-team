import axios from 'axios';


const w_id = localStorage.getItem('doc_id');
export const createNewConversations = async conversations => {
    try {
        const res = await axios.post('https://ab5a9f15.ngrok.io/conversation/create', {
        w_id: '5ad4cebecb2cb341f09211ee',
        conversations,
        });
        return res;
    } catch (error) {}
};

///users/find
