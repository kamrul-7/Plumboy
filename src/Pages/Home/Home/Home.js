import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../product/Products';
import Services from '../Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;