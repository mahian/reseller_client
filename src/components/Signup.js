import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../context/UserContext';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(authContext);
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(res => {
                console.log(res);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }).then(res => {
                    console.log("Request complete! response:", res);
                });
            })
            .then(err => console.log(err))
    }
    return (
        <div className='container px-3 mx-auto py-20'>
            <div className="card w-full">
                <h2 className="text-2xl font-bold">Sign up</h2>
                <p className='my-3 text-gray-400'>already have an account? <Link className='text-primary hover:underline' to="../login">Login</Link></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
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