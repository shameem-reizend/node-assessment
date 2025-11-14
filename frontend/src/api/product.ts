import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_URL

export const fetchProductsAPI = async () => {
    const response = await axios.get(`${baseURl}/product/all`);
    return response.data.data;
}

export const fetchProductByIdAPI = async (productId: string) => {
    const response = await axios.get(`${baseURl}/product/${productId}`);
    return response.data.data;
}

export const createProductAPI = async (formData: object) => {
    const response = await axios.post(`${baseURl}/product`, formData);
    return response.data;
}

export const deleteProductsAPI = async (productId: string) => {
    const response = await axios.delete(`${baseURl}/product/${productId}`);
    return response.data;
}