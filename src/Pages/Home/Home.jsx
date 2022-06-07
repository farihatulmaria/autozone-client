import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSummary from '../../Components/BusinessSummary/BusinessSummary';
import Offer from '../../Components/Offer/Offer';
import Partners from '../../Components/Partners/Partners';
import Products from '../../Components/Products/Products';
import Testimonial from '../../Components/Testimonial/Testimonial';
const Home = () => {

    return (
        <div>
            <Banner/>
            <Offer/>
            <Products/>
            <BusinessSummary/>
            <Testimonial/>
            <Partners/>
        </div>
    );
};

export default Home;