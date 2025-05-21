import React from 'react'

function Component({ product }) {
    const { title, price, description, category, image } = product

    return (
        <div className="w-[220px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-contain bg-gray-50 p-2"
            />
            <div className="p-3">
                <span className="text-xs text-gray-500 uppercase">{category}</span>
                <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">{title}</h2>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-sm font-bold text-blue-600">${price}</span>
                    <button className="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Component
