import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className='text-2xl text-yellow-400 font-semibold'>{rating}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                {
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}  </>
                        :
                        description
                }
                <div className="card-actions justify-end">
                    <Link to={`/serve/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;