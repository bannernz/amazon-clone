import React from 'react';
import Product from './Product.js';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product id="123" title="The Lean Startup, By Eric Ries" price={1.0} rating={5} />
                    <Product id="321" title="The Lean Startup, By Eric Ries" price={5} rating={1} />
                </div>
                <div className="home__row">
                    <Product id="546" title="The Lean Startup, By Eric Ries" price={10} rating={2} />
                    <Product id="456" title="The Lean Startup, By Eric Ries" price={50} rating={1} />
                    <Product id="789" title="The Lean Startup, By Eric Ries" price={75} rating={3} />
                </div>
                <div className="home__row">
                    <Product id="216" title="The Lean Startup, By Eric Ries" price={199.99} rating={4} />
                </div>
            </div>
        </div>
    );
}

export default Home;
