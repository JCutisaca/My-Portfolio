const axios = require('axios');
const { API_KEY_GEOCODING } = process.env

const getCurrentLocation = async (lat, lon) => {
    const { data } = await axios(`https://api.opencagedata.com/geocode/v1/json?q=${lat},+${lon}&key=${API_KEY_GEOCODING}`)
    const { country_code, state, suburb, town } = data.results[0].components;
    const location = {
        country_code,
        state,
        suburb,
        town
    }
    return location;
}

module.exports = getCurrentLocation;