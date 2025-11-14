import React from 'react';
import { Trash } from 'lucide-react';
import type { Purchase } from '../../pages/Purchase';


interface productPropType{
    purchase: Purchase[];
    fetchpurchase: () => void
}

export const PurchaseTable: React.FC<productPropType> = ({purchase}) => {

    const formatDate = (dateString: string)  => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
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
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Product Name</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Purchase_price</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Quantity</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Purchased At</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Action</p>
                    </th>
                </tr>
                {
                   purchase.map((purchase, index) => (
                    <tr key={purchase.purchase_entry_id} className="block lg:table-row border-b border-blue-gray-100 last:border-b-0">
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {index + 1}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {purchase.product.name}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {purchase.purchase_price}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {purchase.quantity}
                            </p>
                        </td>  
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {formatDate(purchase.purchased_at)}
                            </p>
                        </td> 
                        <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50 cursor-pointer">
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
