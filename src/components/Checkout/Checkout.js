import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt="" />

               <div>
                   <h3> Hello {user?.email}</h3>
                   <h2 className="checkout_title">Your Shopping Basket</h2>
                   {
                       basket.map(item=>(
                           <CheckoutProduct
                           id={item.id}
                           title ={item.title}
                           img={item.image}
                           price={item.price}
                           rating ={item.rating}
                           key ={item.id}
                           />
                       ))
                   }

               </div>
           </div>
           <div className="checkout_right">
               <Subtotal/>
               
           </div>
            
        </div>
    );
};

export default Checkout;