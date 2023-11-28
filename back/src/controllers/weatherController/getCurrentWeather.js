const axios = require('axios');
const { API_KEY_WEATHER } = process.env;

const getCurrentWeather = async ({ lat, lon }) => {
    const { data } = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY_WEATHER}`)
    return data;
}

module.exports = getCurrentWeather;

