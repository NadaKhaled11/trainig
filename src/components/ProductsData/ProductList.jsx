import React, { useEffect, useState } from 'react'
import Products from './Products';

const ProductList = () => {
    const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch(apiUrl).then((res) => res.json()).then((data) => setProducts(data))
    },[])

  return (
    <>
    <h2 className='text-center p-4'>Our Products</h2>,
    <div className="container">
        <div className="row">
            {products.map((product) => {
                <div className="col-3" key={product.id}>
                    <Products product={product}/>
                </div>
            })}
        </div>
    </div>
    </>
  )
}

export default ProductList