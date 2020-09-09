import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css';
import {useStateValue} from './StateProvider';

function Subtotal() {
    const [{basketItemsTotal, basketCostTotal}, dispatch] = useStateValue();
    let items = 100;
    let value = 1000;

    console.log('OnUpdate Action => Cost: ', basketCostTotal);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basketItemsTotal} items) <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={basketCostTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
