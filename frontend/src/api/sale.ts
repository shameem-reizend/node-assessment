import axios from 'axios';
import type { itemType } from '../components/sales/AddSales';

const baseURl = import.meta.env.VITE_BASE_URL

export const fetchSalesAPI = async () => {
    const response = await axios.get(`${baseURl}/sales`);
    return response.data.data
}

export const createSalesAPI = async (items: itemType[]) => {
    const response = await axios.post(`${baseURl}/sales`, {items});
    return response.data;
}

export const fetchSaleItemsAPI = async (saleId: string) => {
    const response = await axios.get(`${baseURl}/sales/saleItems/${saleId}`);
    return response.data.data;
}

export const fetchSaleDetailAPI = async (saleId: string) => {
    const response = await axios.get(`${baseURl}/sales/${saleId}`);
    return response.data.data;
}