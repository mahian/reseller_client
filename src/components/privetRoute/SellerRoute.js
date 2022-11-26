import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import useSeller from '../../hook/useSeller';
import Spinner from '../../utilities/Spinner';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeller, sellerLoading] = useSeller(user?.email)
    if (loading || sellerLoading) {
        return <Spinner />
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="../login" />;
};

export default SellerRoute;