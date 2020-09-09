import React from 'react';
import {useStateValue} from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function CheckoutItems({item, removeFromBasket}) {
    const [{basketItems}, dispatch] = useStateValue();
    const {id, title, price, rating, image} = item;

    let imageUrl = image ? image : '/the_lean_startup.jpeg';

    return (
        <div className="checkoutitems" key={id}>
            <div className="checkoutitems__imagePlaceholder">
                <img src={imageUrl} />
            </div>
            <div className="checkoutitems__info">
                <span>{title}</span>
                <span>
                    {' '}
                    <CurrencyFormat
                        renderText={(value) => (
                            <div>
                                <strong>{value}</strong>
                            </div>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                </span>
            </div>
            <div className="checkoutitems__removeButton">
                <button onClick={() => removeFromBasket(item)}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutItems;
