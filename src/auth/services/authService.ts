import useAuthStore from "@/auth/store/authStore";
import { AuthState } from "@/auth/types/authStore";

export const login = (data: Partial<AuthState>) => {
  const { login } = useAuthStore.getState();
  login(data);
  return {
    ok: true,
    msg: 'Login...',
  };
};
