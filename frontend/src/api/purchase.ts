import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_URL

export const createPurchaseAPI = async (formData: object) => {
    const response = await axios.post(`${baseURl}/purchase`, formData);
    return response.data;
}

export const fetchPurchaseAPI = async () => {
    const response = await axios.get(`${baseURl}/purchase`,);
    return response.data.data;
}