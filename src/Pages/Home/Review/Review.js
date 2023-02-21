import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/Logo/38821-review.json";
const Review = () => {
    return (
        <div className='mx-auto h-96 w-96'>
            <Lottie animationData={groovyWalkAnimation} loop={true} />;
        </div>
    );
};

export default Review;