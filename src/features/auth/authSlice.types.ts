export interface AuthState {
  accessToken: string | null;
  user: any;
  isLoading: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
