import useAuthStore from "@/auth/store/authStore";
import { useEffect } from "react";
import { useAuthService } from "./useAuthService";

export const useCheckAuth = () => {
  const status = useAuthStore(state => state.status);
  const onChecking = useAuthStore(state => state.onChecking);
  const { checkAuthToken } = useAuthService();

  useEffect(() => {
    onChecking();
    checkAuthToken();
  }, []);

  return status;
};