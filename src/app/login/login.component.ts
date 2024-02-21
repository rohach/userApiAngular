import { Component } from '@angular/core';
import { users } from '../user/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../user/Services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../user/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  users: users[] = [];
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiServiceLogin: ApiService,
    private router: Router,
    private apiService: AuthService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit() {
    const username = this.userForm.value.username;
    const password = this.userForm.value.password;

    if (username && password) {
      this.apiServiceLogin
        .userLogin({
          username,
          password,
        })
        .subscribe(
          (response) => {
            console.log(response);
            if (response) {
              localStorage.setItem('users', JSON.stringify(response));
              const token = response.token;
              this.apiService.login(token);
            }
            window.alert('Logged in successfully!');
            // this.router.navigateByUrl('/');
            window.location.href = '/';
          },
          (error) => {
            window.alert('Invalid UserName or Passowrd!');
          }
        );
    } else {
      window.alert('All Fields required!');
    }
  }
}
