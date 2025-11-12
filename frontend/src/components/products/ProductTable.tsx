import React from 'react';
import type { Product } from '../../pages/Product';
import { Trash } from 'lucide-react';
import { deleteProductsAPI } from '../../api/product';
import { toast } from 'react-toastify';


interface productPropType{
    products: Product[];
    fetchProducts: () => void
}

export const ProductTable: React.FC<productPropType> = ({products, fetchProducts}) => {

    const formatDate = (dateString: string)  => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    const handleDelete = async (product_id: string) => {
        try {
            const response = await deleteProductsAPI(product_id);
            if(response.success === true){
                toast.success('Product deleted');
                fetchProducts()
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="relative w-full overflow-x-auto rounded-xl shadow-md">
        <table className="w-full min-w-max table-auto text-left text-gray-800 bg-white">
            <thead className="hidden lg:table-header-group">
                <tr className='bg-gray-300'>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">SI NO</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">SKU</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Product Name</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Price</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Current Stock</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Tax percentage</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Created At</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Action</p>
                    </th>
                </tr>
                {
                   products.map((product, index) => (
                    <tr key={product.product_id} className="block lg:table-row border-b border-blue-gray-100 last:border-b-0">
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {index + 1}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {product.sku}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {product.name}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {product.price}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {product.current_stock}
                            </p>
                        </td> 
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {product.tax_percentage}
                            </p>
                        </td> 
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {formatDate(product.created_at)}
                            </p>
                        </td> 
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50 cursor-pointer" onClick={() => handleDelete(product.product_id)}>
                            <div className='rounded-xl p-2 hover:bg-orange hover:text-white w-10'>
                                <Trash />
                            </div>
                        </td> 
                    </tr>
                   )) 
                }
            </thead>
        </table>
    </div>
  )
}
