import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
const LoginProvider = () => {
    const {signInWithGoogle} = useContext(authContext);
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            navigate("/")
        })
        .then(err => console.log(err))
    }
    return (
        <>
            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-outline w-full"><img className='h-5 mr-3' src="/assets/google.png" alt="" /> continue with google</button>
        </>
    );
};

export default LoginProvider;