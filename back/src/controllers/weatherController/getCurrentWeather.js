const axios = require('axios');
const getCurrentLocation = require('../geoCodeController/getCurrentLocation');
const { API_KEY_WEATHER } = process.env;

const getCurrentWeather = async ({ lat, lon, language }) => {
    const { data } = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric&&lang=${language}`);
    const location = await getCurrentLocation(lat, lon);
    const weather = {
        current: data.current,
        daily: data.daily
    };
    return ({...weather, ...location});
}

module.exports = getCurrentWeather;