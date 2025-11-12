import React, { useEffect, useState } from 'react'
import { fetchProductsAPI } from '../api/product';
// import { MetricsCard } from '../components/MetricCard';
import { ProductTable } from '../components/ProductTable';

export interface Product{
  product_id: string,
  sku: string,
  name: string,
  price: number,
  current_stock: number,
  tax_percentage: number,
  created_at: string
}

export const Product: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const productData = await fetchProductsAPI();
        console.log(productData);
        setProducts(productData)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Products</h1>
      {/* <div className='grid grid-cols-5 mt-4'>
        <MetricsCard heading='Total Products' value={products.length} />
      </div> */}

       <div className="max-w-full mx-auto py-3 mt-4">
          <ProductTable products={products}/>
      </div>
    </div> 
  )
}
