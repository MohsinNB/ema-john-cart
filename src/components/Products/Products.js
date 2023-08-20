import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Products.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
    const {handleAddToCart,product} = props;
    const { name, img, price, ratings, seller } = product;
    

   
    return (
        <div className='product-card'>
            <img src={img} alt="products" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: {price}</p>
                <p className='seller'><small>seller: {seller}</small></p>
                <p className='rating'><small>Rating: {ratings} star</small></p>
            </div>

            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;