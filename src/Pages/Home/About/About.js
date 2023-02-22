import React from 'react';
import img from '../../../assets/About/img.png'
import parts from '../../../assets/About/parts.jpg'
import { Button } from 'antd';

const About = () => {
    return (
        <div className="hero lg:mb-20 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={img} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-12 lg:right-2 lg:top-2/3 top-80 h-20 lg:h-auto w-20 lg:w-3/5 border-3 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <p className="lg:text-4xl text-2xl mt-4 font-bold text-orange-600  text-center hover:text-green-500">About Us</p>
                    <h1 className="my-5 lg:text-3xl font-bold text-blue-400 text-center">
                        We are qualified
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6 mb-6 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Button className='btn btn-accent mx-auto flex lg:px-8 lg:text-xl'>
                        Get more info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;