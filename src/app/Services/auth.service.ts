import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'https://localhost:7006/api';

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    const body = { userName, password };
    return this.http.post<any>(`${this.apiUrl}/User/SignIn`, body).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
  

