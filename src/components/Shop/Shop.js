import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])

    useEffect(() => {
        console.log('Products loading before fatch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log('products loaded')
            })
    },[])
    // console.log(products[0])

    useEffect(() => {
        // console.log('local Storage first line',products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                console.log(storedCart)
                addedProduct.quantity=quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
        // console.log('local storage finished')
    },[products])

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