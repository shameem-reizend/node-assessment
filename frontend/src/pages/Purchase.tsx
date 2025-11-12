import React from 'react'
import { AddPurchase } from '../components/purchase/AddPurchase';

export const Purchase: React.FC = () => {

  return (
    <div>
          <div className='flex justify-between w-full'>
            <div>
              <h1 className='text-3xl font-semibold'>Purchase</h1>
            </div>
              <AddPurchase/>
          </div>
    
           <div className="max-w-full mx-auto py-3 mt-4">
              
          </div>
        </div> 
  )
}
