import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_URL

export const fetchSalesAPI = async () => {
    const response = await axios.get(`${baseURl}/sales`);
    return response.data.data
}