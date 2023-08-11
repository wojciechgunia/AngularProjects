export interface IUser
{
  login: string;
  email: string;
  role: string;
}

export class User {
  constructor(
    public login: string,
    public email: string,
    public role: string,
  ) {}
}

export interface LoginData {
  login: string;
  password: string;
}

export interface RegisterData {
  email: string;
  login: string;
  password: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthResponse {
  timestamp: string;
  message: string;
  code: string;
}

export interface RecoveryPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  uid: string;
}