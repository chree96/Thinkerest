export interface AuthState {
  accessToken: string | null;
  user: any;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
