export interface User {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  username?: string;
  avatarUrl?: string;
  role?: string;
  provider?: string;
  createdAt?: string;
  lastModifiedAt?: string;
  teamCreated?: boolean;
  blocked?: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorResponse {
  message: string;
}
