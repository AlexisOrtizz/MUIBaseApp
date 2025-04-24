import { Route, Routes } from 'react-router-dom'

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import MainRoutes from './MainRoutes';
import LoginPage from '@/features/auth/pages/Login';

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
            <MainRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
