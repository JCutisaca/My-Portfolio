const { Router } = require('express');
const { getCurrentWeatherHandler } = require("../handlers/weatherHandler");

const weatherRouter = Router();

weatherRouter.get("/location", getCurrentWeatherHandler);

module.exports = weatherRouter;