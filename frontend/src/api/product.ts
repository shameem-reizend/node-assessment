import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_URL

export const fetchProductsAPI = async () => {
    const response = await axios.get(`${baseURl}/product/all`);
    return response.data.data;
}