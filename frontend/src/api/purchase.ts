import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_URL

export const createPurchaseAPI = async (formData: object) => {
    const response = await axios.post(`${baseURl}/product`, formData);
    return response.data;
}