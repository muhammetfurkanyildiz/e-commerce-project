import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
    )
}

export default RouterConfig