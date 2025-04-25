import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@/auth/store/authStore';

const PublicRoute = ({ children, redirectTo = "/dashboard" } : {
    children: React.ReactNode,
    redirectTo?: string,
}) => {

    const status = useAuthStore(state => state.status);

    return (status !== 'authenticated')
        ? children
        : <Navigate to={ redirectTo } />
}

export default PublicRoute;