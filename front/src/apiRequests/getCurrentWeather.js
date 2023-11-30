import axios from "axios"

export const getCurrentWeather = async (lat, lon, language) => {
    try {
        const {data} = await axios(`http://localhost:3001/weather/location?lat=${lat}&lon=${lon}&language=${language}`)
        return data
    } catch (error) {
        console.log(error);
    }
}