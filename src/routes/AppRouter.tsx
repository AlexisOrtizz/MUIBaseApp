import { Route, Routes } from 'react-router-dom'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashRoutes from '@/features/routes/ProtectedRoutes';
import AuthRoutes from '@/auth/routes/AuthRoutes';
import CheckingAuth from '@/components/CheckingAuth';
import { useCheckAuth } from '@/auth/hooks/useCheckAuth';

export const AppRouter = () => {
  const status = useCheckAuth();

  if( status === 'checking') {
    return (
        <CheckingAuth />
    );
  }
  
  return (
    <>
      <Routes>
        <Route path="auth/*" element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <DashRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  );
}
