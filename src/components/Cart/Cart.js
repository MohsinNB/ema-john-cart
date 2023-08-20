import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} =props
    return (
        <div className='cart-component'>
            <h3>Order summary</h3>
            <p>Selected item: {cart.length}</p>
        </div>
    );
};

export default Cart;