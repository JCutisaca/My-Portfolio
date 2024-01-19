const spotifyApi = require('../../utils/spotifyApi');
require('dotenv').config();
const { REFRESH_TOKEN } = process.env

const getCurrentTrack = async () => {
        spotifyApi.setRefreshToken(REFRESH_TOKEN);
        const data = await spotifyApi.refreshAccessToken();
        spotifyApi.setAccessToken(data.body.access_token);
        const recentTracks = await spotifyApi.getMyRecentlyPlayedTracks({
            limit: 1,
        });
        const result = recentTracks.body.items[0].track
        return result
}

module.exports = getCurrentTrack;