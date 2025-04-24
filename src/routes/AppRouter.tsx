import { Route, Routes } from 'react-router-dom'

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashRoutes from '@/features/dashboard/routes/MainRoutes';
import LoginPage from '@/features/auth/pages/LoginPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <DashRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
