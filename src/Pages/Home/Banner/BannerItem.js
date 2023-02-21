import React from 'react';
import { Carousel } from 'antd';
import slider1 from '../../../assets/Banner/img1.jpg'
import slider2 from '../../../assets/Banner/img2.jpg'
import slider3 from '../../../assets/Banner/img3.jpg'
import slider4 from '../../../assets/Banner/img4.jpg'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/Logo/117401-pipewrench.json";
import './BannerItem.css'
const BannerItem = () => {
    return (
        <div className='carousel-img'>
            <Carousel autoplay>
                <div>
                    <img className='h-full w-full' src={slider1} alt="" />
                </div>
                <div>
                    <img className='h-full w-full' src={slider2} alt="" />
                </div>
                <div>
                    <img className='h-full w-full' src={slider3} alt="" />
                </div>
                <div>
                    <img className='h-full w-full' src={slider4} alt="" />
                </div>
            </Carousel>
            <div className='lg:flex'>
                <div className='hidden lg:inline'>
                    <Lottie style={{ height: 250, width: 400 }} animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className='flex'>
                    <div className='lg:hidden '>
                        <Lottie style={{ height: 150, width: 100 }} animationData={groovyWalkAnimation} loop={true} />
                    </div>
                    <h1 className='text-center mt-8 text-xl hover:text-green-600 lg:text-4xl  font-bold text-red-500'>Professional
                        Plumbing Service <br />
                        for Your Home</h1>

                </div>
            </div>

        </div>
    )
}
export default BannerItem;