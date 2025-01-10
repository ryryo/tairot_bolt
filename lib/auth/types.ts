export interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export interface AuthHookResult {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  validatePassword: (password: string) => boolean;
}