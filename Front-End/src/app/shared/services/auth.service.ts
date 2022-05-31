import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AUTH_CONSTANTS,
  ROUTER_CONSTANTS,
} from 'src/app/app-config/app.conestant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem(AUTH_CONSTANTS.JWT_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(AUTH_CONSTANTS.JWT_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(AUTH_CONSTANTS.JWT_KEY);
    this.router.navigate([
      `${ROUTER_CONSTANTS.CONTEXT}${ROUTER_CONSTANTS.LOGIN}`,
    ]);
  }
}
