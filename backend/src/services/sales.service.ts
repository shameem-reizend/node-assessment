import { AppDataSource } from "../config/data-source";
import { Sale } from "../entities/Sale.entity";

const salesRepo = AppDataSource.getTreeRepository(Sale)

export const createSales = async (salesData: Partial<Sale>) => {
    const purchase = salesRepo.create(salesData);
    return await salesRepo.save(purchase);
}

export const createEmptySales = async() => {
    const sales = salesRepo.create();
    return await salesRepo.save(sales);
}

export const getAllSales = async () => {
    return await salesRepo.find()
}

export const getSaleyId = async (sale_id: string) => {
    return await salesRepo.findOneBy({sale_id})
}


export const updateSalesById = async (sale_id: string, saleData: Partial<Sale>) => {
    return await salesRepo.update({sale_id}, saleData);
}