import axios from 'axios';

const api = axios.create({
    baseURL: '/https://api.hearthstonejson.com/v1/54613/enUS/cards'
});

export default api;

  /*axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  }) url: 'https://pastebin.com/raw/qCSQCcMS',
        //https://api.hearthstonejson.com/v1/54613/enUS/cards.json
   // timeout: 5000,    // 6 secs timeout
   */