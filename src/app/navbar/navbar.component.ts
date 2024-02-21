import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  loginStatus: boolean = false;
  token: string = '';

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('loggedInUser');
    const finalToken = token ? JSON.parse(token) : null;
    this.token = finalToken;

    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigateByUrl('/login');
    }
  }
}
