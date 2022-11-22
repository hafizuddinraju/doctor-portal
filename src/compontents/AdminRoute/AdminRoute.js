import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAdmin from '../../hooks/useAdmin';

import { AuthDataContext } from '../../UseContext/AuthContext';
import Spinner from '../Loading/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthDataContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;