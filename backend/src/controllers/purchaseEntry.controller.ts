import { Request, Response, NextFunction } from "express";
import { getProductById, updateProductById, updateProductStockById } from "../services/product.service";
import { ApiError } from "../utils/apiError";
import { createPurchase, getAllPurchase } from "../services/purchaseEntries.service";

export const makePurchaseHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {product_id, quantity} = req.body;
        
        const product = await getProductById(product_id);
        if(!product){
            throw new ApiError("product not found", 404);
        }
        const purchase_price = Number(product.price) * Number(quantity)
        const total_stock = product.current_stock + quantity;
        const updatedProduct = await updateProductStockById(product_id, total_stock);

        const purchase = await createPurchase({product: updatedProduct, quantity, purchase_price})

        res.status(201).json({
            success: true,
            message: "Product successfully created",
            data: purchase
        })
    } catch (error) {
        next(error)
    }
}

export const fetchPurchaseHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const purchase = await getAllPurchase()
        if(!purchase){
            throw new ApiError("purchase not found", 404);
        }
        res.status(201).json({
            success: true,
            message: "purchase successfully created",
            data: {
                purchase
            }
        })
    } catch (error) {
        next(error)
    }
}