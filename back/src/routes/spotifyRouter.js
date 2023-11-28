const { Router } = require("express");
const { getCurrentTrackHandler, getAuthorizationHandler } = require("../handlers/spotifyHandler");

const spotifyRouter = Router();

spotifyRouter.get("/login", getAuthorizationHandler);
spotifyRouter.get("/track", getCurrentTrackHandler);

module.exports = spotifyRouter;