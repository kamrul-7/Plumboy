import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import Loading from '../../../others/Loading';
import MyServiceCard from './ServiceCard';



const MyServices = () => {
    const [services, setServices] = useState([]);
    const { isLoading } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://plumboy-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="lg:text-4xl text-xl font-semibold mt-8 mb-12 text-red-500 hover:text-green-500">Our Service Area</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <MyServiceCard
                        key={service._id}
                        service={service}
                    ></MyServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;