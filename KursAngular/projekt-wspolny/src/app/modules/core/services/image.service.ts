import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostImageResponse, Image } from '../models/image.model';

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
          return { url: `${this.apiUrl}?uuid=${resp.uuid}` };
        }),
      );
  }
}
