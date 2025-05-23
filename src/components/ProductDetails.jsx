import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setSelectedProduct } from '../redux/slices/ProductSlice'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/slices/basketSlice'


function ProductDetails() {
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.product)
    const dispatch = useDispatch()

    const [count, setCount] = React.useState(0);
    console.log(count);
    useEffect(() => {
        getProductbyId()
    }, [])

    const getProductbyId = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        });
    }

    const addBasket = () => {
        const { price, image, title, description } = selectedProduct;
        const payload = { id, price, image, title, description, count };

        dispatch(addToBasket(payload));

    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sol: Ürün Görselleri */}
                <div>
                    <div className="flex flex-col gap-4">
                        <img src={selectedProduct.image} alt="Main" className="w-full h-[400px] object-contain border" />
                        <div className="flex gap-2">
                            {[1, 2, 3].map((_, i) => (
                                <img
                                    key={i}
                                    src={selectedProduct.image}
                                    alt={`thumb-${i}`}
                                    className="w-20 h-20 object-contain border"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sağ: Ürün Bilgileri */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
                    <div className="flex items-center gap-2 text-sm mb-2">
                        <div className="text-yellow-500">★★★★☆</div>
                        <span className="text-gray-600">(1 CUSTOMER REVIEW)</span>
                    </div>

                    <div className="mb-4">
                        <span className="line-through text-gray-400 mr-2">${(selectedProduct.price * 1.19).toFixed(0)}</span>
                        <span className="text-xl text-black font-bold">${selectedProduct.price}</span>
                        <span className="ml-2 text-red-500">-19%</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.
                    </p>

                    {/* Quantity ve Add to Cart */}
                    <div className="flex items-center gap-4 mb-4">
                        <label className="text-sm">Quantity</label>
                        <input
                            type="number"
                            value={count}
                            min={1}
                            className="w-16 border rounded px-2 py-1 text-center"
                            onChange={(e) => setCount(Number(e.target.value))}
                        />

                        <button className="bg-black text-white px-6 py-2 text-sm font-semibold hover:bg-gray-800" onClick={addBasket}>
                            ADD TO CART
                        </button>
                    </div>

                    <button className="text-sm text-gray-700 mb-4 hover:underline">♡ ADD TO WISHLIST</button>

                    <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>SKU:</strong> 007</p>
                        <p><strong>Categories:</strong> Home Decor, Vases</p>
                        <p><strong>Tags:</strong> Modern, Pottery</p>
                    </div>
                </div>
            </div>

            {/* Alt Sekmeler */}
            <div className="mt-12 border-t pt-6">
                <div className="flex gap-6 mb-4 border-b pb-2">
                    <button className="font-semibold border-b-2 border-black pb-1">DESCRIPTION</button>
                    <button className="text-gray-500 hover:text-black">ADDITIONAL INFORMATION</button>
                    <button className="text-gray-500 hover:text-black">REVIEWS (1)</button>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedProduct.description}
                </p>
            </div>
        </div>
    )

}

export default ProductDetails