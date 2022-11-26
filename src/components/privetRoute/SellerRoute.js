import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import useSeller from '../../hook/useSeller';
import Spinner from '../../utilities/Spinner';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeller] = useSeller(user?.email)
    if (loading) {
        return <Spinner />
    }
    if (!user) {
        return <Navigate to="../login" />
    }
    return children;
};

export default SellerRoute;