import { AppDataSource } from "../config/data-source";
import { Bill } from "../entities/Bill.entity";

const billRepo = AppDataSource.getRepository(Bill);

export const createBill = async (billData: Partial<Bill>) => {
    const bill = billRepo.create(billData);
    return await billRepo.save(bill);
}