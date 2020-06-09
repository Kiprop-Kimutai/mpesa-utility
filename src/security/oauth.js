const axios = require('axios');
module.exports = {
    getOauthToken() {
        return axios({
            url: process.env.oauthURL,
            headers: {
                Authorization: 'Basic ' +  Buffer.from(`${process.env.consumerKey}:${process.env.consumerSecret}`).toString('base64')
            }
        });
    }
}