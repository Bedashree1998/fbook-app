import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotPasswordComponent } from './login-module/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-module/reset-password/reset-password.component';
import { HomepageComponent } from './Customer-UI/homepage/homepage.component';
import { NetworkComponent } from './Customer-UI/network/network.component';
import { FriendsComponent } from './Customer-UI/friends/friends.component';
import { SettingsComponent } from './Customer-UI/settings/settings.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'reset-password', component: ResetPasswordComponent},
{path: 'homepage', component: HomepageComponent},
{path: 'network', component: NetworkComponent},
{path: 'friends', component: FriendsComponent},
{path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
