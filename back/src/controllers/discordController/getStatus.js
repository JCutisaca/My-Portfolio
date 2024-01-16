const axios = require('axios');
const { DISCORDUSERID } = process.env;

const getStatus = async () => {
    const { data } = await axios(`https://api.lanyard.rest/v1/users/${DISCORDUSERID}`)
    return data;
}

module.exports = getStatus;