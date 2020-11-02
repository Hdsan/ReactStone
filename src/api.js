import axios from 'axios';

const api = axios.create({
    baseURL: '/https://api.hearthstonejson.com/v1/54613/enUS/cards'
});

export default api;
