import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../config/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const authContext = createContext();

const UserContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = (email, password) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signInWithEmail,
        loading,
        user,
        logOut,
        updateUser,
        signInWithGoogle
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;