import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login-module/register/register.component';
import { LoginComponent } from './login-module/login/login.component';
import { ForgotPasswordComponent } from './login-module/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-module/reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageComponent } from './Customer-UI/homepage/homepage.component';
import { NetworkComponent } from './Customer-UI/network/network.component';
import { FriendsComponent } from './Customer-UI/friends/friends.component';
import { SettingsComponent } from './Customer-UI/settings/settings.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersComponent } from './Customer-UI/users/users.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Customer-UI/profile/profile.component';
import { FriendComponent } from './Customer-UI/friend/friend.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './Customer-UI/header/header.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomePageComponent,
    NetworkComponent,
    FriendsComponent,
    SettingsComponent,
    UsersComponent,
    ProfileComponent,
    FriendComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
HttpClientModule,
MatFormFieldModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
