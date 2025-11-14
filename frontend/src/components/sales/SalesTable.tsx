import React from 'react';
import type { Sale } from '../../pages/Sales';

interface SalePropType {
    sales: Sale[];
    fetchSales: () => void
}

const SalesTable: React.FC<SalePropType> = ({sales}) => {

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
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Total Amount</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Discount</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Final Amount</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Created At</p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Action</p>
                    </th>
                </tr>
            </thead>
            {
                sales.map((sale, index) => (
                <tr key={sale.sale_id} className="block lg:table-row border-b border-blue-gray-100 last:border-b-0">
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {index + 1}
                        </p>
                    </td>  
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {sale.total_amount}
                        </p>
                    </td>  
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {sale.discount}
                        </p>
                    </td>  
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {sale.final_amount}
                        </p>
                    </td>  
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {formatDate(sale.created_at)}
                        </p>
                    </td> 
                    <td className="hidden lg:table-cell p-4 border-b border-blue-gray-50 cursor-pointer">
                        <div className=''>
                            <button className='bg-orange text-white rounded-lg px-6 py-2 cursor-pointer'>View Detail</button>
                        </div>
                    </td> 
                </tr>
                )) 
            }
        </table>
    </div>
  )
}

export default SalesTable