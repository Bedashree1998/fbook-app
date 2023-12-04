import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };
  @Output() dataFetched = new EventEmitter<any>();
  responseData: any;


  apiEndpoint = 'http://3.17.216.66:3000/users/authenticate';

  constructor(private _http: HttpClient) {}

  onSubmit() {
    // Make a POST request to the API endpoint with the form data
    this._http.post(this.apiEndpoint, this.formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        this.responseData = response;
        sessionStorage.setItem('myKey', this.responseData['token']);
        this.dataFetched.emit(this.responseData);
        // Optionally, reset the form after successful submission
        this.resetForm();
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );
  }

  onLogin(){
    console.log("Logged")
  }

  resetForm() {
    // Reset the form data
    this.formData = {
      email: '',
      password: ''
    };
  }
}
