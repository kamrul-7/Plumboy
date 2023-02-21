import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Meta from 'antd/es/card/Meta';
import { Button, Card } from 'antd';
import Loading from '../../../others/Loading';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';

const MyServiceCard = ({ service }) => {
    const { _id, img, price, title, description, rating } = service;
    const { isLoading } = useContext(AuthContext)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="bg-white shadow-xl mb-10 my-4">

            <Card className=' '
                hoverable
                style={{ width: 30 }}
                cover={<PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>}
            >
                <Meta title={title} />
                <h2 className='text-2xl text-yellow-400 font-semibold'>{rating}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                {
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}  </>
                        :
                        description
                }
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <Button className='mr-4 mb-4 px-8 text-lg pb-8' type="primary" danger>Details</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default MyServiceCard;