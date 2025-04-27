import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "../dashboard/pages/Home";

const ProtectedRoutes = () => {
  return (
    <MainLayout>
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<HomePage />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </MainLayout>
  );
};

export default ProtectedRoutes;