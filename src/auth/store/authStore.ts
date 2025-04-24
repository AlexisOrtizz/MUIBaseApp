import { create, StateCreator } from 'zustand';
import { AuthStore, AuthState, AuthActions } from '@/auth/types/authStore';

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMsg: null,
};

const createAuthActions: StateCreator<AuthStore, [], [], AuthActions> = (set) => ({
  login: (payload: Partial<AuthState>) => set(() => ({
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
});

const useAuthStore = create<AuthStore>()((...a) => ({
  ...initialState,
  ...createAuthActions(...a),
  
}));

export default useAuthStore;