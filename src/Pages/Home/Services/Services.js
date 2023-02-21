import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Card } from 'antd';
import Loading from '../../../others/Loading';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';

const { Meta } = Card;

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://plumboy-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="lg:text-4xl text-2xl font-semibold text-red-500 hover:text-green-500 my-8">Our Service Area</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map((service) => {
                        count = count + 1;
                        if (count <= 3) {
                            return (<div className='flex mx-auto my-4'>
                                <Card
                                    hoverable
                                    style={{ width: 350 }}
                                    cover={<PhotoProvider>
                                        <PhotoView src={service?.img}>
                                            <img src={service?.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>}
                                >
                                    <Meta title={service?.title} />
                                    <h2 className='text-2xl text-yellow-400 font-semibold'>{service?.rating}</h2>
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${service?.price}</p>
                                    {
                                        service?.description.length > 100 ?
                                            <>{service?.description.slice(0, 100) + '...'}  </>
                                            :
                                            service?.description
                                    }
                                </Card>
                            </div>)
                        }
                    })
                }
            </div>
            <Link to='/myservices'><button className='btn btn-accent mt-8 px-12 flex mx-auto'>Show  More</button></Link>
        </div>
    );
};

export default Services;