import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_CONSTANTS } from 'src/app/app-config/app.conestant';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'cts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([
        `${ROUTER_CONSTANTS.CONTEXT}${ROUTER_CONSTANTS.CONTACTS}`,
      ]);
    }
  }

  onSubmit(form: NgForm): void {
    const value = form.value;
    const payload = {
      username: value.username,
      password: value.password,
    };
    if (payload.username === 'admin' && payload.password === 'admin') {
      this.authService.setToken('accespted');
      console.log(this.authService.getToken());
    }

    if (this.authService.getToken() === 'accespted') {
      this.router.navigate([
        `${ROUTER_CONSTANTS.CONTEXT}${ROUTER_CONSTANTS.CONTACTS}`,
      ]);
    } else {
      this.router.navigate([
        `${ROUTER_CONSTANTS.CONTEXT}${ROUTER_CONSTANTS.LOGIN}`,
      ]);
    }
  }
}
