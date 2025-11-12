import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className='py-8 bg-gray-300'>
        <div className='flex justify-around'>
            <div className='text-2xl'>
                Inventory & <span className='text-primary'>Billing</span>
            </div>
            <div>
                <ul className='hidden md:flex flex-col md:flex-row gap-10 text-xl'>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/">Dashboard</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/product">Products</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/purchase">Purchase</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/sales">Sales</a>
                    </li>
                </ul>
            </div>
            <div className='md:hidden'>
                <Menu onClick={() => setOpen(!open)}/>
            </div>
            
        </div>
        {open && 
        <div className='md:hidden m-4 bg-primary text-white z-10 flex justfy-center p-5 rounded-xl'>
             <ul className='flex flex-col gap-5 text-xl'>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/">Dashboard</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/product">Products</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/purchase">Purchase</a>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>
                        <a href="/sales">Sales</a>
                    </li>
                </ul>
        </div>
        }
    </div>
  )
}
