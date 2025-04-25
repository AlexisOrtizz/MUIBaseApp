import useAuthStore from "@/auth/store/authStore";
import { AuthState } from "@/auth/types/authStore";

export const login = async (data: Partial<AuthState>) => {
  const { login, checkingCredentials } = useAuthStore.getState();
  checkingCredentials();
  
  setTimeout(() => {
    login(data);
  }, 3000);

  return {
    ok: true,
    msg: 'Login...',
  };
};
