import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import useSeller from '../../hook/useSeller';
import Spinner from '../../utilities/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, adminLoading] = useSeller(user?.email)
    console.log(isAdmin);
    if (loading || adminLoading) {
        return <Spinner />
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="../login" />;
};

export default AdminRoute;