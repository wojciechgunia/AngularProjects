import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostOrder, PostOrderResponse } from '../models/order.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = `${environment.apiUrl}/order`;

  constructor(private http: HttpClient) {}

  addOrder(body: PostOrder): Observable<PostOrderResponse> {
    return this.http
      .post<PostOrderResponse>(`${this.apiUrl}`, body, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          window.location.href = response.redirectUri;
        }),
      );
  }
}
