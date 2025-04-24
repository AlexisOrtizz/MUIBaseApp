
export type AuthState = {
  status: string;
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  errorMsg: string | null;
};

export type AuthActions = {
  login: (payload: Partial<AuthState>) => void;
  logout: (msg?: string) => void;
  checkingCredentials: () => void;
};

export type AuthStore = AuthState & AuthActions;
