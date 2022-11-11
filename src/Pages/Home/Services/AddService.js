import React from 'react';
import useTitle from '../../../hooks/UseTitle';




const AddService = () => {
    useTitle('Add Services')
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
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handlePlaceComment}>


                <div className='grid grid-cols-1 lg:grid-cols-2 my-12'>
                    <input name="title" type="text" placeholder="Your title" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />
                    <input name="img" type="text" placeholder="Your image" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />
                    <input name="price" type="text" placeholder="Your price" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />
                    <input name="rating" type="text" placeholder="Your rating" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />
                    <input name="description" type="text" placeholder="Your Description" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />


                </div>

                <input className='btn bg-orange-500 my-12' type="submit" value="Place Your comments" />
            </form>
        </div>
    );
};

export default AddService;