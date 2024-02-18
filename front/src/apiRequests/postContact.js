import axios from "axios"


export const postContact = async (form) => {
    try {
        const BACK = process.env.NEXT_PUBLIC_BACK;
        const { data } = await axios.post(`${BACK}/contact/send`, form)
        return data
    } catch (error) {
        return Promise.reject(error);
    }
}