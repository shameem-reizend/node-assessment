import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/Product.entity";

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

export const deleteProductById = async (product_id: string) => {
    await productRepo.delete(product_id);
}

export const getAllProducts = async () => {
    return await productRepo.find();
}

export const updateProductStockById = async (product_id: string, total_stock: number) => {
    await productRepo.update(product_id, {current_stock: total_stock})
    return await getProductById(product_id)
}