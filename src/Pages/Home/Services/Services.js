import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    useEffect(() => {
        fetch('https://plumboy-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <input className='input input-sm' ref={searchRef} type="text" />
                <button onClick={handleSearch}>Search</button>
                <button className='btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map((service) => {
                        count = count + 1;
                        if (count <= 3) {
                            return (<div>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img src={service.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <div className="card-body">
                                        <h2 className="card-title">{service?.title}</h2>
                                        <h2 className='text-2xl text-yellow-400 font-semibold'>{service?.rating}</h2>
                                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${service?.price}</p>
                                        {
                                            service?.description.length > 100 ?
                                                <>{service?.description.slice(0, 100) + '...'}  </>
                                                :
                                                service?.description
                                        }
                                        <div className="card-actions justify-end">
                                            <Link to={`/servicedetails/${service._id}`}>
                                                <button className="btn btn-primary">details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    })
                }
            </div>
            <Link to='/myservices'><button className='btn btn-warning mb-10'>Show More</button></Link>
        </div>
    );
};

export default Services;