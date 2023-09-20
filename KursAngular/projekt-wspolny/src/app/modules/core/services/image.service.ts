import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PostImageResponse,
  Image,
  DeleteImageResponse,
} from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = `${environment.apiUrl}/image`;

  constructor(private http: HttpClient) {}

  addImage(formData: FormData): Observable<Image> {
    return this.http
      .post<PostImageResponse>(`${this.apiUrl}`, formData, {
        withCredentials: true,
      })
      .pipe(
        map((resp) => {
          return { url: `${this.apiUrl}?uid=${resp.uid}` };
        }),
      );
  }

  deleteImage(uid: string): Observable<DeleteImageResponse> {
    const params = new HttpParams().append('uid', uid);
    return this.http.delete<DeleteImageResponse>(`${this.apiUrl}`, {
      params,
      withCredentials: true,
    });
  }
}
