import axios from "@/config/axios";
import useAuthStore from "@/auth/store/authStore";
import { AuthRegisterReq } from "../types/request";
import Swal from "sweetalert2";

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
      console.error('Error en el login', error);
      onLogout('Credenciales incorrectas');
      Swal.fire({
        title: 'Error en la autenticación', 
        text: 'Credenciales incorrectas', 
        toast: true,
        position: 'top-right',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
        // timerProgressBar: true,
        // didOpen: () => {
        //   Swal.showLoading();
        // },
        // willClose: () => {
        //   Swal.hideLoading();
        // }
      });
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
      console.log('checkAuthToken', data);
    } catch (error: unknown) {
      console.error('Error en el token', error);
      localStorage.clear();
      onLogout('Token inválido');
      Swal.fire('Error en la autenticación', 'Token inválido', 'error');
    }
  };

  const startLogout = () => {
    localStorage.clear();
    console.log('Logout...');
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