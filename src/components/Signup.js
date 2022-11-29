import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authContext } from '../context/UserContext';
import LoginProvider from './shared/LoginProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(authContext);
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const thisUser = {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        role: data.role,
                        image: imgData.data.url
                    }

                    createUser(data.email, data.password)
                        .then((res) => {
                            console.log(res.user);
                            const userInfo = {
                                displayName: data.name,
                                photoURL: thisUser.image
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    fetch("https://reseller-server.vercel.app/users", {
                                        method: "POST",
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(thisUser)
                                    }).then(res => {
                                        console.log("Request complete! response:", res);
                                        Swal.fire(
                                            'Good job!',
                                            'You are successfully created this account!',
                                            'success'
                                        );
                                        navigate('/');
                                    });
                                })
                                .catch(err => console.log(err));
                        })
                        .then(err => console.log(err))
                }
            })
    }
    return (
        <div className='container px-3 mx-auto py-20'>
            <div className="card w-full max-w-[500px] mx-auto">
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
                            <span className="label-text">Role</span>
                        </label>
                        <select {...register("role", { required: true })} className="select select-bordered">
                            <option selected>user</option>
                            <option>seller</option>
                        </select>
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">sign up</button>
                    </div>

                    <div className="divider">OR</div>
                    <LoginProvider />
                </form>
            </div>
        </div>
    );
};

export default Signup;