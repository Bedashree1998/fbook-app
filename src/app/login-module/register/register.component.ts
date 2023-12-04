import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    password: ''
  };


  apiEndpoint = 'http://3.17.216.66:3000/users/register';

  constructor(private _http: HttpClient) {}

  onSubmit() {
    // Make a POST request to the API endpoint with the form data
    this._http.post(this.apiEndpoint, this.formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
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
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      password: ''
    };
  }
}

