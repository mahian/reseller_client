import React from 'react';
import AdvertisedProduct from './AdvertisedProduct';
import CategoriesHome from './CategoriesHome';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <CategoriesHome/>
            <AdvertisedProduct/>
        </div>
    );
};

export default Home;