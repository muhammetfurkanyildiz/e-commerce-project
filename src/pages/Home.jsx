import React from 'react'
import ProductList from '../components/ProductList'
import SlideShow from '../components/SlideShow'

function Home() {
    return (
        <div className='home'>
            <SlideShow />
            <ProductList />
        </div>
    )
}

export default Home