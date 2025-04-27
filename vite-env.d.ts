/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Ejemplo de variable de entorno
  readonly VITE_APP_NAME: string; // Agrega las variables que necesites
  // Agrega más variables según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}