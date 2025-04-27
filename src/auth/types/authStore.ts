
export interface AuthUser {
  uid: string | null;
  email: string | null;
  name: string | null;
  photoUrl: string | null;
};

export type AuthState = {
  status: string;
  user: AuthUser | null;
  errorMsg: string | null;
};

export type AuthActions = {
  onChecking: () => void;
  onLogin: (payload: AuthUser) => void;
  onLogout: (msg?: string) => void;
  clearErrorMessage: () => void;
};

export type AuthStore = AuthState & AuthActions;
