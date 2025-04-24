import { Navigate, Route, Routes } from "react-router-dom";
// import { Navbar } from "../../ui";
import { DashboardPage } from "@/features/dashboard/pages";
import AuthLayout from "@/layouts/AuthLayout";

const HeroesRoutes = () => {
  return (
    <AuthLayout>
      {/* <Navbar /> */}

      <div className="container">
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </AuthLayout>
  );
};

export default HeroesRoutes;