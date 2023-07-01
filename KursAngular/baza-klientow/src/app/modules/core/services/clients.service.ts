import { GetClientsResponse } from './../models/client.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Client, ClientResponse, PostClient } from '../models/client.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClients(
    pageIndex: number,
    itemPerPage: number,
    sortDirection: string,
    columnName: string,
    value = ''
  ): Observable<GetClientsResponse> {
    let params = new HttpParams()
      .append('_page', pageIndex)
      .append('_limit', itemPerPage);
    if (columnName) {
      params = params
        .append('_sort', columnName)
        .append('_order', sortDirection);
    }

    if (value) {
      params = params.append('firstname_like', value);
    }

    return this.http
      .get<ClientResponse[]>(`${this.apiUrl}/clients`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((respons: HttpResponse<ClientResponse[]>) => {
          if (!respons.body) return { clients: [], totalCount: 0 };

          const clientsArr: Client[] = respons.body.map(
            ({ id, firstname, surname, email, phone, address, postcode }) =>
              new Client(
                id,
                firstname,
                surname,
                email,
                phone,
                address,
                postcode
              )
          );

          return {
            clients: clientsArr,
            totalCount: Number(respons.headers.get('X-Total-Count')),
          };
        })
      );
  }

  getClient(id: number): Observable<Client> {
    return this.http
      .get<ClientResponse>(`${this.apiUrl}/clients/${id}`)
      .pipe(
        map(
          (c: ClientResponse) =>
            new Client(
              c.id,
              c.firstname,
              c.surname,
              c.email,
              c.phone,
              c.address,
              c.postcode
            )
        )
      );
  }

  postClient(clientData: PostClient): Observable<Client> {
    return this.http
      .post<ClientResponse>(`${this.apiUrl}/clients`, clientData)
      .pipe(
        map(
          (c: ClientResponse) =>
            new Client(
              c.id,
              c.firstname,
              c.surname,
              c.email,
              c.phone,
              c.address,
              c.postcode
            )
        )
      );
  }
}
