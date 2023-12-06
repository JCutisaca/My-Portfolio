import axios from "axios"


export const postContact = async (form) => {
    try {
        const { data } = await axios.post("http://localhost:3001/contact/send", form)
        return data
    } catch (error) {
        return Promise.reject(error);
    }
}