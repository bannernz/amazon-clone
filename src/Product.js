import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [{basketItems}, dispatch] = useStateValue();
    // const [{basketItems}, dispatch] = useStateValue();
    let imageUrl = image ? image : '/the_lean_startup.jpeg';

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'BASKET_ITEM_ADD',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span role="img" aria-label="star" key={i}>
                            🌟
                        </span>
                    ))}
            </div>
            <img src={imageUrl} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
