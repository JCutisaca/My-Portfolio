import axios from "axios"

export const getDiscordStatus = async () => {
    try {
        const BACK = process.env.NEXT_PUBLIC_BACK;
        const { data } = await axios(`${BACK}/discord`);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}