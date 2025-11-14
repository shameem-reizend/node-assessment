import React, { useEffect, useState } from 'react'
import { AddSale } from '../components/sales/AddSales'
import { fetchSalesAPI } from '../api/sale'
import SalesTable from '../components/sales/SalesTable'

export interface Sale{
  sale_id: string;
  total_amount: number;
  final_amount: number;
  discount: number;
  created_at: number;
}

export const Sales: React.FC = () => {

  const[sales, setSales] = useState([])

  const fetchSales = async () => {
    try{
      const salesData = await fetchSalesAPI();
      console.log(salesData.sales);
      setSales(salesData.sales);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSales();
  }, [])

  return (
    <div>
      <div className='flex justify-between w-full'>
        <div>
          <h1 className='text-3xl font-semibold'>Sales</h1>
        </div>
          <AddSale/>
      </div>
      <div className="max-w-full mx-auto py-3 mt-4">
          <SalesTable sales={sales} fetchSales={fetchSales}/>
      </div>
    </div>
  )
}
