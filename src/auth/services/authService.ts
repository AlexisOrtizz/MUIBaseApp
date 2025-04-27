import useAuthStore from "@/auth/store/authStore";
import { AuthState } from "@/auth/types/authStore";

export const login = async (data: Partial<AuthState>) => {
  const { login, checkingCredentials } = useAuthStore.getState();
  checkingCredentials();
  login(data);

  return {
    ok: true,
    msg: 'Login...',
  };
};
 
export const logout = () => {
  const { logout } = useAuthStore.getState();
  logout();
};