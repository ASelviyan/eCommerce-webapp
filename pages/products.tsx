import React from 'react'
import Navbar from '../components/navbar'
import Cards from '../components/products/cards'
import Categories from '../components/products/categories'


function Product() {
  return (
    <>
            <Navbar />
        <div className='flex'>
            <Categories />
        <div className ='grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
                <Cards />
                <Cards />
                <Cards />
            
        </div>
        </div>

    </>
  
  )
}

export default Product