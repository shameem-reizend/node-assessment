import React, { useEffect, useState } from 'react'
import { AddPurchase } from '../components/purchase/AddPurchase';
import {PurchaseTable} from '../components/purchase/PurchaseTable';
import { fetchPurchaseAPI } from '../api/purchase';
import type { Product } from './Product';

export interface Purchase{
  purchase_entry_id: string,
  purchase_price: number,
  quantity: number,
  purchased_at: string;
  product: Product
}

export const Purchase: React.FC = () => {

   const [purchase, setpurchase] = useState<Purchase[]>([]);
  
      const fetchpurchase = async () => {
          const purchaseData = await fetchPurchaseAPI();
          console.log(purchaseData);
          setpurchase(purchaseData.purchase)
      }
  
      useEffect(() => {
          fetchpurchase();
      }, [])

  return (
    <div>
          <div className='flex justify-between w-full'>
            <div>
              <h1 className='text-3xl font-semibold'>Purchase</h1>
            </div>
              <AddPurchase fetchpurchase={fetchpurchase}/>
          </div>
    
           <div className="max-w-full mx-auto py-3 mt-4">
              <PurchaseTable  purchase={purchase} fetchpurchase={fetchpurchase}/>
          </div>
        </div> 
  )
}
