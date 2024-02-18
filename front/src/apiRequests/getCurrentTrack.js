import axios from "axios"

export const getCurrentTrack = async () => {
    try {
        const BACK = process.env.NEXT_PUBLIC_BACK;
        const { data } = await axios(`${BACK}/spotify/track`)
        return data
    } catch (error) {
        console.log(error);
    }
}