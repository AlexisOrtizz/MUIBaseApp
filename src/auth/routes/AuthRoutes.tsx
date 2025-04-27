import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@/auth/pages/LoginPage";
import RegisterPage from "@/auth/pages/RegisterPage";
import AuthLayout from "@/layouts/AuthLayout";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;