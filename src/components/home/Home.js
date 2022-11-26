import React from 'react';
import AdvertisedProduct from './AdvertisedProduct';
import CategoriesHome from './CategoriesHome';
import Hero from './Hero';
import HomeProduct from './HomeProduct';

const Home = () => {
    return (
        <div>
            <Hero/>
            <CategoriesHome/>
            <HomeProduct/>
            <AdvertisedProduct/>
        </div>
    );
};

export default Home;