import React, { useContext } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import Loading from '../../../others/Loading';

const ServiceCardDetails = () => {
    const services = useLoaderData();
    const { isLoading } = useContext(AuthContext)
    const { title, details, total_view, rating, image_url, price } = services;
    console.log(services)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card card-compact m-12 lg:mx-32 bg-base-100 shadow-xl bg-#f5dfdf-200">
            <figure><img className='m-2' src={image_url} alt="" /></figure>
            <div className="card-body text-start">
                <div className='flex'>


                    <p>{rating.number}</p>
                    <div className='ml-56 flex '>
                        <p >{total_view}</p>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="">
                    <Link to={'/'} ><button className="btn btn-block"> Go To Home</button></Link>

                </div>
            </div >
        </div >
    );
};

export default ServiceCardDetails;