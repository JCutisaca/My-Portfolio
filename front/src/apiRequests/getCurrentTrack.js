import axios from "axios"

export const getCurrentTrack = async () => {
    try {
        const { data } = await axios("http://localhost:3001/spotify/track")
        return data
    } catch (error) {
        return { error }
    }
}