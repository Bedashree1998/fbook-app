import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotPasswordComponent } from './login-module/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-module/reset-password/reset-password.component';
import { HomePageComponent } from './Customer-UI/homepage/homepage.component';
import { NetworkComponent } from './Customer-UI/network/network.component';
import { FriendsComponent } from './Customer-UI/friends/friends.component';
import { SettingsComponent } from './Customer-UI/settings/settings.component';
import { UsersComponent } from './Customer-UI/users/users.component';
import { AuthGuard } from './helper/auth-guard.guard';
import { AuthGuardAdmin } from './helper/auth-guard-admin.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
  ,
  {
    path : 'forgot',
    component:ForgotPasswordComponent
  },
  {
    path : 'friends',
    component:FriendsComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'home',
    component:HomePageComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'register',
    component:RegisterComponent
  },
  {
    path : 'reset/:id',
    component:ResetPasswordComponent
  },
  {
    path : 'settings',
    component:SettingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'network',
    component:NetworkComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'users',
    component:UsersComponent,
    canActivate:[AuthGuardAdmin]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
