const { Router } = require("express");
const { getCurrentTrackHandler, getAuthorizationHandler } = require("../handlers/spotifyHandler");

const spotifyRouter = Router();

spotifyRouter.get("/spotify/login", getAuthorizationHandler);
spotifyRouter.get("/spotify/track", getCurrentTrackHandler)

module.exports = spotifyRouter;