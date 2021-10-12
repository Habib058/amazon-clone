import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [err, setErr] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setErr(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">

                <h1>Checkout ( <Link to="checkout">{basket?.length}  items </Link> )</h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 vjsv kns </p>
                        <p>ami kjca kncvac dkcnm</p>
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                img={item.image}
                                price={item.price}
                                rating={item.rating}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (                                     
                                            <h3>
                                                Order Total :<strong>{value}</strong>
                                            </h3>   
                                   )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>

                                </button>
                            </div>
                            {err && <div>{err}</div> }
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;