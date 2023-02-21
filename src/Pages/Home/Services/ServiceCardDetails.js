import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import Loading from '../../../others/Loading';
const ServiceCardDetails = () => {
    const { isLoading } = useContext(AuthContext);
    const { title, rating, img, price, description } = useLoaderData();
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card card-compact m-12 lg:mx-32 shadow-xl bg-#f5dfdf-200 p-4 bg-white text-black">
            <img src={img} alt="" />
            <h2 className='text-red-500 font-bold my-3 text-xl'>{title}</h2>
            <p className='text-yellow-500 text-xl'>{rating}</p>
            <h3 className='text-green-600 text-xl font-bold'>Price ${price}</h3>
            <p>{description}</p>
            <Link to='/myservices'><button className='btn btn-accent mt-8 px-12 flex mx-auto'>Previous</button></Link>
        </div >
    );
};

export default ServiceCardDetails;