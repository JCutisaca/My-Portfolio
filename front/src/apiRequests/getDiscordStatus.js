import axios from "axios"

export const getDiscordStatus = async () => {
    try {
        const { data } = await axios("http://localhost:3001/discord");
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}