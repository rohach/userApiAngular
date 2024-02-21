import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'loggedInUser';

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(response: string) {
    console.log(response);
    localStorage.setItem('loggedInUser', JSON.stringify(response));
    return response;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
