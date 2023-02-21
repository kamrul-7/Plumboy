import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';




const AddService = () => {
    useTitle('Add Services')
    const navigate = useNavigate()
    const handlePlaceComment = event => {

        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;


        const service = {
            title,
            img,
            rating,
            price,
            description
        }
        console.log(service)
        fetch('https://plumboy-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success("Your Service Added Successfully")
        navigate('/myservices')

    }

    return (
        <div className='ml-12'>
            <h1 className='text-center text-xl mt-12 lg:text-4xl text-red-500 hover:text-green-500'>Add New Services</h1>
            <form onSubmit={handlePlaceComment}>


                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <input name="title" type="text" placeholder="Your title" className="input input-ghost border-red-800 mr-16 input-bcommentsed mt-12" required />
                    <input name="img" type="text" placeholder="Your image" className="input input-ghost border-red-800 mr-16 input-bcommentsed mt-12" required />
                    <input name="price" type="text" placeholder="Your price" className="input input-ghost border-red-800 mr-16 input-bcommentsed mt-12" required />
                    <input name="rating" type="text" placeholder="Your rating" className="input input-ghost border-red-800 mr-16 input-bcommentsed mt-12" required />
                    <input name="description" type="text" placeholder="Your Description" className="input input-ghost border-red-800 mr-16 input-bcommentsed my-12" required />
                </div>
                <input className='btn btn-accent' type="submit" value="Place Your service" />
                useform=''
            </form>
        </div>
    );
};

export default AddService;