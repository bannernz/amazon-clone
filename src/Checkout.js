import React from 'react';
import CurrencyFormat from 'react-currency-format';

import CheckoutItems from './CheckoutItems';

import Subtotal from './Subtotal.js';

import './Checkout.css';
import {useStateValue} from './StateProvider';

function Checkout() {
    const [{basketItems}, dispatch] = useStateValue();

    const removeAllFromBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'BASKET_ITEMS_REMOVEALL',
            item: null,
        });
    };

    let removeItemFromBasket = (item) => {
        // dispatch the item into the data layer

        dispatch({
            type: 'BASKET_ITEM_REMOVE',
            item: item,
        });
    };

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
                <div>
                    <button onClick={removeAllFromBasket}>Remove all Items</button>
                </div>
                {basketItems.map((item, index) => {
                    return <CheckoutItems item={item} removeFromBasket={removeItemFromBasket} key={index} />;
                })}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
