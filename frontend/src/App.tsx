import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Product } from './pages/Product';
import { Purchase } from './pages/Purchase';
import { Sales } from './pages/Sales';
import { Layout } from './Layout';
import {ToastContainer} from 'react-toastify'

export const App: React.FC = () => {
  return (
    <>
    <ToastContainer />
      <Router>
          <Routes>
            <Route
            element={
                <Layout/>
            }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/sales" element={<Sales />} />
            </Route>
          </Routes>
        </Router>
    </>
  )
}
