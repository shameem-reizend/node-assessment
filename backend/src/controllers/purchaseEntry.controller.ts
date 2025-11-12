import { Request, Response, NextFunction } from "express";
import { getProductById, updateProductById, updateProductStockById } from "../services/product.service";
import { ApiError } from "../utils/apiError";
import { createPurchase } from "../services/purchaseEntries.service";

export const makePurchaseHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {product_id, quantity, purchase_price} = req.body;
        
        const product = await getProductById(product_id);
        if(!product){
            throw new ApiError("product not found", 404);
        }
        const total_stock = product.current_stock + quantity
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