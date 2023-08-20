import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected item: {props.Cart.length}</p>
        </div>
    );
};

export default Cart;