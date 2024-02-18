import axios from "axios"

export const getCurrentWeather = async (lat, lon) => {
    try {
        const BACK = process.env.NEXT_PUBLIC_BACK;
        const { data } = await axios(`${BACK}/weather/location?lat=${lat}&lon=${lon}`)
        return data
    } catch (error) {
        console.log(error);
    }
}