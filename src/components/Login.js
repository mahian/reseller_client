import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/UserContext';
import LoginProvider from './shared/LoginProvider';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const {signInWithEmail} = useContext(authContext);
    const onSubmit = data => {
        signInWithEmail(data.email, data.password)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .then(err => console.log(err))
    }

    return (
        <div className='container px-3 mx-auto py-20'>
            <div className="card w-full max-w-[500px] mx-auto">
                <h2 className="text-2xl font-bold">Login</h2>
                <p className='my-3 text-gray-400'>not have an account yet? <Link className='text-primary hover:underline' to="../signup">register</Link></p>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <div className="divider">OR</div>
                    <LoginProvider/>
                </form>
            </div>
        </div>
    );
};

export default Login;