import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  constructor(private _http: HttpClient) {}
  apiData: any[] = []; 
  apiEndpoint = 'http://3.17.216.66:3000/users/';
  ngOnInit(): void {
    console.log('ngOnInit called!');
    const token = sessionStorage.getItem('myKey');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this._http.get(this.apiEndpoint, { headers }).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.apiData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
