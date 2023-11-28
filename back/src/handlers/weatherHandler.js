const getCurrentWeather = require("../controllers/weatherController/getCurrentWeather")


const getCurrentWeatherHandler = async(req, res) => {
    try {
        const currentWeather = await getCurrentWeather(req.query)
        res.status(200).json(currentWeather)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getCurrentWeatherHandler,
}