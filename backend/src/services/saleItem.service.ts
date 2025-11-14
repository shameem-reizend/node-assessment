import { AppDataSource } from "../config/data-source";
import { SaleItem } from "../entities/SaleItem.entity";

const saleItemRepo = AppDataSource.getRepository(SaleItem);

export const createSaleItem = async (saleItemData: Partial<SaleItem>) => {
    const saleItem = saleItemRepo.create(saleItemData);
    return await saleItemRepo.save(saleItem)
}