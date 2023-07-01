import {
  GetUserResponse,
  PostUser,
  UserLoginData,
} from 'src/app/modules/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(UserLoginData: UserLoginData): Observable<User[]> {
    return this.http.get<GetUserResponse[]>(`${this.apiUrl}/users`).pipe(
      map((userArr) =>
        userArr.filter(
          (user) =>
            user.username === UserLoginData.username &&
            user.password === UserLoginData.password
        )
      ),
      map((userArr) =>
        userArr.map((user) => new User(user.email, user.username))
      ),
      tap((userArr) => this.handleAuthentication(userArr))
    );
  }

  register(userData: PostUser): Observable<GetUserResponse> {
    return this.http.post<GetUserResponse>(`${this.apiUrl}/users`, userData);
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/logowanie']);
  }

  autoLogin() {
    const userData: { email: string; username: string } = JSON.parse(
      localStorage.getItem('user') as string
    );

    if (!userData) {
      return;
    }

    const user = new User(userData.email, userData.username);
    this.user.next(user);
  }

  private handleAuthentication(userArr: User[]) {
    if (userArr.length == 0) {
      return;
    }
    const user: User = userArr[0];
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/klienci']);
  }
}
