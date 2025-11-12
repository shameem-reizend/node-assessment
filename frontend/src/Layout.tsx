import React from 'react'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Navbar/>
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
