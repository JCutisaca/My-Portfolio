const axios = require('axios');
const getCurrentLocation = require('../geoCodeController/getCurrentLocation');
const { API_KEY_WEATHER } = process.env;

const getCurrentWeather = async ({ lat, lon }) => {
    const { data } = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric&&lang=En`);
    const dataEs = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric&&lang=Es`);
    const location = await getCurrentLocation(lat, lon);
    const newWeather = {
        temp: (Math.round(data?.current?.temp * 10) / 10) + "°",
        icon: data.current?.weather[0]?.icon,
        timeDescription: data?.current?.weather[0]?.description?.toLowerCase().split(" "),
        descriptionEn: data?.current?.weather[0]?.description,
        descriptionEs: dataEs?.data?.current?.weather[0]?.description
    }
    return ({...newWeather, ...location});
}

module.exports = getCurrentWeather;