import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../src/assets/Logo/98194-loading.json";
const Loading = () => {
    return (
        <div className='mx-auto h-96 w-96 mt-20'>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default Loading;