import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container px-3 mx-auto my-10'>
            <div className="card w-full">
                <h2 className="text-2xl font-bold">Login</h2>
                <p className='my-3 text-gray-400'>not have an account yet? <Link className='text-primary hover:underline' to="../signup">register</Link></p>
                <form className="">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;