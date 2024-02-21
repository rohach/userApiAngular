import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/Guard/login.guard';

const routes: Routes = [
  { path: '', title: 'Home', component: UserComponent },
  {
    path: 'profile',
    title: 'Profile',
    component: UserProfileComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', title: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
