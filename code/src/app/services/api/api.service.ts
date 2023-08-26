import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl // Replace with your API endpoint
//   private apiUrl = '/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
   }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`, { params, headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
}

