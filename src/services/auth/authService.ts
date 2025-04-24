import useAuthStore from "@/store/auth/authStore";
import { AuthState } from "@/types/auth";

export const login = (data: Partial<AuthState>) => {
  const { login } = useAuthStore.getState();
  login(data);
  return {
    ok: true,
    msg: 'Login...',
  };
};
