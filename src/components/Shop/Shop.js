import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products[0])

    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart)
        for (const id in storedCart) {
            console.log(id)
        }
    },[])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shopping'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }

            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;