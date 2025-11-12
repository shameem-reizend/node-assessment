import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/Product.Entity";

const productRepo = AppDataSource.getRepository(Product);

export const getProductBySku = async (sku: string) => {
    return await productRepo.findOneBy({sku});
}

export const getProductById = async (product_id: string) => {
    return await productRepo.findOneBy({product_id});
}

export const createProduct = async (productData: Partial<Product>) => {
    const product = productRepo.create(productData);
    return await productRepo.save(product);
}

export const updateProductById = async (product_id: string, data: Partial<Product>) => {
    await productRepo.update(product_id, data);
    return await productRepo.findOneBy({product_id})
}