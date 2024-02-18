import axios from "axios"

export const getAllProjects = async () => {
    try {
        const BACK = process.env.NEXT_PUBLIC_BACK;
        const { data } = await axios(`${BACK}/projects/`)
        return data
    } catch (error) {
        console.log(error);
    }
}