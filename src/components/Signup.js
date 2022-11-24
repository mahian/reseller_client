import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='container px-3 mx-auto my-10'>
            <div className="card w-full">
                <h2 className="text-2xl font-bold">Sign up</h2>
                <p className='my-3 text-gray-400'>already have an account? <Link className='text-primary hover:underline' to="../login">Login</Link></p>
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;