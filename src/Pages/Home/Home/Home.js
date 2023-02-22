import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import About from '../About/About';
import BannerItem from '../Banner/BannerItem';
import Products from '../product/Products';
import Services from '../Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <BannerItem></BannerItem>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;