import { AppDataSource } from "../config/data-source";
import { PurchaseEntries } from "../entities/PurchaseEntries.entity";

const purchaseRepo = AppDataSource.getTreeRepository(PurchaseEntries)

export const createPurchase = async (purchaseData: Partial<PurchaseEntries>) => {
    const purchase = purchaseRepo.create(purchaseData);
    return await purchaseRepo.save(purchase);
}