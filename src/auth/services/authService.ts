import useAuthStore from "@/auth/store/authStore";
import { AuthState, AuthUser } from "@/auth/types/authStore";
import axiosInstance from "@/config/axios";

export const login = async (email: string, password: string) => {
  const { onLogin, onLogout, onChecking } = useAuthStore.getState();
  onChecking();

  try {
    const { data } = await axiosInstance.post('/auth', { email, password});

    localStorage.setItem('token', data.token);
    localStorage.setItem('token-init-date', new Date().getTime().toString());

    onLogin(data);
  } catch (error) {
    onLogout('Invalid credentials');
    console.error('Login error:', error);
  };
};

export const logout = () => {
  const { onLogout } = useAuthStore.getState();
  onLogout();
};