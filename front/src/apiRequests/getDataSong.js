import axios from "axios"


export const getDataSong = async () => {
    try {
        const { data } = await axios("https://playout-metadata.tomorrowland.com/metadata?tag=main");
        return data;
    } catch (error) {
        console.log({ error: error.message });
    }
}