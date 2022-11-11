import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';


const Service = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const comment = form.comment.value;

        const comments = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            rating,
            comment,
        }
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('comments placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <form onSubmit={handlePlaceComment}>
                <h2 className="text-4xl">You are about to comments: {title}</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 my-12'>
                    <input name="rating" type="text" placeholder="Your rating" className="input input-ghost border-red-800 mr-16 input-bcommentsed" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full border-red-800  input-bcommentsed" readOnly />
                </div>
                <textarea name="comment" className="textarea border-red-800  textarea-bcommentsed h-24 w-full" placeholder="Your comment" required></textarea>

                <input className='btn bg-orange-500 my-12' type="submit" value="Place Your comments" />
            </form>
        </div>
    );
};

export default Service;