const getCurrentTrack = require("../controllers/spotifyController/getCurrentTrack");
const spotifyApi = require("../utils/spotifyApi");

const getAuthorizationHandler = async (req, res) => {
    try {
        const scopes = ['user-read-recently-played'];
        res.redirect(spotifyApi.createAuthorizeURL(scopes));
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getCurrentTrackHandler = async (req, res) => {
    try {
        const currentTrack = await getCurrentTrack();
        res.status(200).json(currentTrack)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    getAuthorizationHandler,
    getCurrentTrackHandler
};