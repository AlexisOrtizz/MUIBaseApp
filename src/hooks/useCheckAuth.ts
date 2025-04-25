import useAuthStore from "@/auth/store/authStore";
import { useEffect } from "react";

export const useCheckAuth = () => {
  const status = useAuthStore(state => state.status);
  const logout = useAuthStore(state => state.logout);

  useEffect(() => {
    logout();
  }, []);

  return status;
};