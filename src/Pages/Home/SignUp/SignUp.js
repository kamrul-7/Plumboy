import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import useTitle from '../../../hooks/UseTitle';
const SignUp = () => {
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false)
    useTitle('SignUp')
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        setSuccess(false)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)

                if (user?.accessToken) {
                    navigate('/');
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className="hero w-full my-20">
            <div>
                <div className="card shadow-2xl bg-white py-20 w-96 text-black">
                    <h1 className="lg:text-5xl text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered bg-white text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white text-black" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    {
                        success && <p className='text-green-500 z-50 text-center font-semibold text-2xl my-2'>User created Successful</p>

                    }

                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;