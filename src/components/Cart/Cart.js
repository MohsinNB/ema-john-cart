import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props
    // console.log(cart)

    let Total = 0;
    let shipping = 0

    for(const product of cart){
        Total = Total + product.price
        shipping = shipping + product.shipping
        // Here product means the name of an element which is in the cart array. That doesn't means the main product. Here product is only a variable.
    }
    const tax = Total * 0.05
    const fixTax = parseFloat(tax.toFixed(2))
    // toFixed property ta use hoise decimal er pore 2 ghor porjonto rakhar jonno.
    const grandTotal = Total + shipping + fixTax
    return (
        <div className='cart-component'>
            <h3>Order summary</h3>
            <p>Selected item: {cart.length}</p>
            <p>Total price: ${Total}</p>
            <p>Total shipping price:${shipping}</p>
            <p>Tax:${fixTax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;