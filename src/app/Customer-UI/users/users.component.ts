import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private _userService:UserService,private _router:Router){}

  users:any[]=[];

  action:boolean=false;

ngOnInit(): void {
  
  let userID=localStorage.getItem("id");
  if(userID)
  {
    this._userService.allUsers().subscribe(
      (data:any[])=>
      {
          data = data.slice(0, 10);
          this.users=data;
      },
      (error)=>
      {
        alert("Unable to load users");
        console.log(error);
      }
    );
}
else 
{
  this._router.navigateByUrl("/login");
}
 
 

}
}


