import axios from "@/config/axios";
import useAuthStore from "@/auth/store/authStore";
import { AuthRegisterReq } from "../types/request";

export const useAuthService = () => {
  const onChecking = useAuthStore(state => state.onChecking);
  const onLogin = useAuthStore(state => state.onLogin);
  const onLogout = useAuthStore(state => state.onLogout);
  // const clearErrorMessage = useAuthStore(state => state.clearErrorMessage);

  const startLogin = async (email: string, password: string) => {
    onChecking();

    try {
      const { data } = await axios.post('/auth', { 
        email, 
        password
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      onLogin({
        uid: data.uid,
        email: email,
        name: data.name,
        photoUrl: data.photoUrl,
      });
    } catch (error) {
      onLogout('Credenciales incorrectas');
      // setTimeout(() => {
      //   clearErrorMessage();
      // }, 10);
    };
  };

  const startRegister = async ({ name, email, password }: AuthRegisterReq) => {
    onChecking();
    try {
      const { data } = await axios.post('/auth/new', { 
        name, email, password 
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      onLogin({
        uid: data.uid,
        email: email,
        name: data.name,
        photoUrl: data.photoUrl,
      });
    } catch (error: unknown) {
        onLogout('No se ha podido registrar el usuario.');
        // setTimeout(() => {
        //   clearErrorMessage();
        // }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if( !token ) return onLogout();

    try {
      const { data } = await axios.get('/auth/renew');

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      onLogin({
        uid: data.uid,
        email: data.email,
        name: data.name,
        photoUrl: data.photoUrl,
      });
    } catch (error) {
      localStorage.clear();
      onLogout('Token inválido');
      // setTimeout(() => {
      //     clearErrorMessage();
      // }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    // TODO: clear other session data if needed
    onLogout();
  };

  return {
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
}