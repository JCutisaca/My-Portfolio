import axios from "axios"

export const getAllProjects = async () => {
    try {
        const { data } = await axios("http://localhost:3001/projects/")
        return data
    } catch (error) {
        console.log(error);
    }
}