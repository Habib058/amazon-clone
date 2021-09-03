import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css';


const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):<strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This Order Contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
        </div>
    );
};

export default Subtotal;