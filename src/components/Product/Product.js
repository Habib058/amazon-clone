import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css'

const Product = ({id,title,img,price,rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    // console.log(basket);
    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:img,
                price:price,
                rating:rating
            },
        });
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}
                </p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) =>(
                            <p>⭐</p>
                        ))
                    }
                    
                    
                </div>
                </div>
                <img src={img} alt="" />
                <button onClick={addToBasket}>Add to basket</button>
            

        </div>
    );
};

export default Product;