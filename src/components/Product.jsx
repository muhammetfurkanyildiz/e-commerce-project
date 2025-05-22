import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { title, price, image, id } = product
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/product-details/" + id)} className="w-60 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative text-center cursor-pointer">

            <div className="absolute top-3 left-3 text-xs uppercase tracking-wide text-gray-600">New</div>


            <div className="p-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-contain mx-auto"
                />
            </div>

            {/* Quick Look Button */}
            <div className="flex justify-center gap-2 mb-2 ">
                <button className="text-xs uppercase px-4 py-1 bg-gray-900 text-white rounded-full hover:scale-105 cursor-pointer">
                    Quick Look
                </button>
                <button className="text-gray-400 hover:text-red-500 transition text-xl cursor-pointer">&hearts;</button>
            </div>

            {/* Product Info */}
            <div className="px-4 pb-4">
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <div className="text-xs text-gray-400 mt-1 ">${price}</div>
                <button className="mt-2 text-xs tracking-wide text-gray-400 uppercase cursor-not-allowed" disabled>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product
