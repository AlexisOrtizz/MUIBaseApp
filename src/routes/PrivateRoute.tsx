import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '@/store/auth/authStore';

const PrivateRoute = ({ children } : {
    children: React.ReactNode
}) => {

    const status = useAuthStore(state => state.status);
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem( 'mui-last-path', lastPath );

    return (status === 'authenticated')
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoute;