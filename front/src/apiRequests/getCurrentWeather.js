import axios from "axios"

export const getCurrentWeather = async (lat, lon) => {
    try {
        const {data} = await axios(`http://localhost:3001/weather/location?lat=${lat}&lon=${lon}`)
        return data
    } catch (error) {
        console.log(error);
    }
}