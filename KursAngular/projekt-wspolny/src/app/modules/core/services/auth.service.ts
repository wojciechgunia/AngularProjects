import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  AuthResponse,
  IUser,
  LoginData,
  RecoveryPasswordData,
  RegisterData,
  ResetPasswordData,
} from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `{$environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(body: LoginData): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/login`, body);
  }

  logout(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/logout`);
  }

  register(body: RegisterData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, body);
  }

  activateAccount(uid: string): Observable<AuthResponse> {
    const params = new HttpParams().append('uid', uid);
    return this.http.get<AuthResponse>(`${this.apiUrl}/activate`, { params });
  }

  resetPassword(body: RecoveryPasswordData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, body);
  }

  changePassword(body: ResetPasswordData): Observable<AuthResponse> {
    return this.http.patch<AuthResponse>(`${this.apiUrl}/reset-password`, body);
  }
}
