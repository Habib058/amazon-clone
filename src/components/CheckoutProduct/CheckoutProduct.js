import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, img, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={img} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
