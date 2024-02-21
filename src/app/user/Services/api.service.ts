import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  userLogin(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', credentials);
  }
}
