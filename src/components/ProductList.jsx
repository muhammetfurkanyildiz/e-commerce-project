import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/ProductSlice'
import Product from './Product'
function ProductList() {
    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.product)
    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='product-list flex flex-wrap justify-center gap-32'>
            {products && products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    )
}

export default ProductList
