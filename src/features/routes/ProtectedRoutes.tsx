import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "@/features/dashboard/pages/Dashboard";
import MainLayout from "@/layouts/MainLayout";

const ProtectedRoutes = () => {
  return (
    <MainLayout>
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </MainLayout>
  );
};

export default ProtectedRoutes;