import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/apiError";
import { getProductById, updateProductStockById } from "../services/product.service";
import { createSales, getAllSales } from "../services/sales.service";
import { instanceToPlain } from "class-transformer";
import { createBill } from "../services/bill.service";

export const makeSalesHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {product_id, quantity} = req.body;

        const product = await getProductById(product_id);
        if(!product){
            throw new ApiError("product not found", 404);
        }
        const sales_price = product.price * quantity;
        const remaining_stock = product.current_stock - quantity;
        const updatedProduct = await updateProductStockById(product_id, remaining_stock);

        const sales = await createSales({product: updatedProduct, quantity, sales_price});
        const discount = sales.discount;
        const tax_percentage = product.tax_percentage;

        const tax_amount = (Number(product.price) * Number(tax_percentage)) * Number(quantity);
        const total_amount = Number(tax_amount) + Number(sales_price) - Number(discount);

        const bill = await createBill({sales, tax_amount, total_amount, discount})

        res.status(201).json({
            success: true,
            message: "Sales successfully created",
            data: {
                bill
            }
        })
    } catch (error) {
        next(error)
    }
}

export const fetchAllSalesHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sales = await getAllSales();

        res.status(201).json({
            success: true,
            message: "Sales successfully Fetched",
            data: {
                sales
            }
        })
    } catch (error) {
        next(error);
    }
}