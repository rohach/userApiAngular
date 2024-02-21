import { Component } from '@angular/core';
import { users } from '../user/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userDetail: users = new users();

  constructor() {
    const userDataString = localStorage.getItem('users') || null;
    const user = userDataString ? JSON.parse(userDataString) : null;
    this.userDetail = user;
    console.log(this.userDetail);
  }
}
