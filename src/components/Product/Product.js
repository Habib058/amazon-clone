import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product_info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nam.
                </p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
                <img src="https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png" alt="" />
            </div>

        </div>
    );
};

export default Product;