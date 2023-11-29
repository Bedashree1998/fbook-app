import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotPasswordComponent } from './login-module/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-module/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
