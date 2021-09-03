import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt="" />

               <div>
                   <h2 className="checkout_title">Your Shopping Basket</h2>

               </div>
           </div>
           <div className="checkout_right">
               <Subtotal/>
               
           </div>
            
        </div>
    );
};

export default Checkout;