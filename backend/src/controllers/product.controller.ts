import { Request, Response, NextFunction } from "express";
import { createProduct, getProductById, getProductBySku, updateProductById } from "../services/product.service";
import { ApiError } from "../utils/apiError";

export const addProductHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, sku, price, current_stock, tax_percentage} = req.body;
        
        const existing = await getProductBySku(sku);
        if(existing) {
            throw new ApiError('Product already exists', 409);
        }

        const product = await createProduct({name, sku, price, current_stock, tax_percentage});

        res.status(201).json({
            success: true,
            message: "Product successfully created",
            data: product
        })
    } catch (error) {
        next(error)
    }
}

export const updateProductHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params

        const findProduct = await getProductById(productId);
        if(!findProduct) {
            throw new ApiError('Product not found', 404);
        }

        const product = await updateProductById(productId, req.body);

        res.json({
            success: true,
            message: "Product updated successfully",
            data: product
        })
    } catch (error) {
        next(error)
    }
}