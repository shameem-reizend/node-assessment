import { AppDataSource } from "../config/data-source";
import { Sales } from "../entities/Sales.entity";

const salesRepo = AppDataSource.getTreeRepository(Sales)

export const createSales = async (salesData: Partial<Sales>) => {
    const purchase = salesRepo.create(salesData);
    return await salesRepo.save(purchase);
}