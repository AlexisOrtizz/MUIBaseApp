import axios from "axios";
import { enviroments } from "./enviroments";

const axiosInstance = axios.create({
  baseURL: enviroments().VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.set('x-token', token);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo global de errores
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;