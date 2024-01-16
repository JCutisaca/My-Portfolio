const { Router } = require('express');
const { getStatusHandler } = require('../handlers/discordHandler');
const discordRouter = Router();

discordRouter.get("/", getStatusHandler)

module.exports = discordRouter;