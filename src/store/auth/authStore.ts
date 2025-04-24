import { create } from 'zustand';

type Store = {
  status: string;
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  errorMsg: string | null;
  login: (payload: Partial<Store>) => void;
  logout: (msg?: string) => void;
  checkingCredentials: () => void;
}

const useStore = create<Store>()((set) => ({
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMsg: null,
  
  login: (payload: Partial<Store>) => set(() => ({
    status: 'authenticated',
    uid: payload.displayName,
    email: payload.email,
    displayName: payload.displayName,
    photoURL: payload.photoUrl,
    errorMessage: null,
  })),

  logout: (msg?: string) => set(() => ({
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: msg,
  })),

  checkingCredentials: () => set(() => ({
    status: 'checking',
  })),
}));

export default useStore;