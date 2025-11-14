import { Request, Response, NextFunction } from "express";
import { createEmptySales, getAllSales, getSaleyId, updateSalesById } from "../services/sales.service";
import { ApiError } from "../utils/apiError";
import { getProductById, updateProductStockById } from "../services/product.service";
import { createSaleItem, getSaleItemById } from "../services/saleItem.service";

export const makeSalesHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {items} = req.body;
        if (!items || !Array.isArray(items) || items.length === 0) {
            throw new ApiError('At least one item is required.', 400)
        }
        const sale = await createEmptySales();
        let sale_item_arr = [];
        for(const item of items){
            const product = await getProductById(item.product_id);
            if (!product) {
                throw new ApiError('product not found', 404)
            }
            if(item.quantity > product.current_stock){
                throw new ApiError(`Only ${product.current_stock} stock available`, 400)
            }
            const unitPriceWithTax = Number(product.price) + Number(product.price * product.tax_percentage);
            const sales_price = unitPriceWithTax * item.quantity;
            const sale_item = await createSaleItem({sales_price, quantity: item.quantity, sale, product})
            const stock = Number(product.current_stock) - Number(item.quantity)
            await updateProductStockById(item.product_id, stock);
            sale_item_arr.push(sale_item)
        }

        let total_amount = sale_item_arr.reduce((sum, saleItem) => sum + saleItem.sales_price, 0);
        let discount = 0
        if(total_amount < 1000){
            discount = 0
        } else if (total_amount >= 1000 && total_amount <= 2000){
            discount = Number(total_amount) * 0.01
        } else {
            discount = Number(total_amount) * 0.01
        }

        const final_amount = total_amount - discount;

        const sales = await updateSalesById(sale.sale_id, {final_amount, discount, total_amount})

        res.json({
            success: true,
            message: "Sales successfully created",
            data: {
                sale_item_arr
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

export const fetchSaleItemBySaleIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {saleId} = req.params;
        const saleItems = await getSaleItemById(saleId);
        if(!saleItems){
            throw new ApiError("saleitem not found ", 404)
        }

        res.status(201).json({
            success: true,
            message: "Sale items successfully Fetched",
            data: {
                saleItems
            }
        })
    } catch (error) {
        next(error)
    }
}

export const fetchSaleByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {saleId} = req.params;
        const sale = await getSaleyId(saleId);
        if(!sale){
            throw new ApiError("saleitem not found ", 404)
        }

        res.status(201).json({
            success: true,
            message: "Sale details successfully Fetched",
            data: {
                sale
            }
        })
    } catch (error) {
        next(error)
    }
}