import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const MyServiceCard = ({ service }) => {
    const { _id, img, price, title, description, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
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
                    <Link to={`/myservices/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;