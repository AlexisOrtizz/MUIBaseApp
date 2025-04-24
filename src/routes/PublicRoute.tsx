import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@/store/auth/authStore';

const PublicRoute = ({ children } : {
    children: React.ReactNode
}) => {

    const status = useAuthStore(state => state.status);

    return (status !== 'authenticated')
        ? children
        : <Navigate to="/dashboard" />
}

export default PublicRoute;