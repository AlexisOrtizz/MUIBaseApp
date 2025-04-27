import { create, StateCreator } from 'zustand';
import { AuthStore, AuthState, AuthActions, AuthUser } from '@/auth/types/authStore';

const initialState: AuthState = {
  status: 'checking',
  user: null,
  errorMsg: null,
};

const createAuthActions: StateCreator<AuthStore, [], [], AuthActions> = (set) => ({
  onChecking: () => set(() => ({
    status: 'checking',
    user: null,
    errorMessage: null,
  })),
  onLogin: (payload: AuthUser) => set(() => ({
    status: 'authenticated',
    user: payload,
    errorMessage: null,
  })),
  onLogout: (msg?: string) => set(() => ({
    status: 'not-authenticated',
    user: null,
    errorMessage: msg,
  })),
  clearErrorMessage: () => set(() => ({
    errorMsg: null,
  })),

});

const useAuthStore = create<AuthStore>()((...a) => ({
  ...initialState,
  ...createAuthActions(...a),
  
}));

export default useAuthStore;