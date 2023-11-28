const SpotifyWebApi = require("spotify-web-api-node");
require('dotenv').config();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

module.exports = spotifyApi;