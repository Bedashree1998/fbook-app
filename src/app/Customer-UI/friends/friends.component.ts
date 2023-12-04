import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  constructor(private _userService:UserService,private _router:Router){}

  friends:any[]=[];

  action:boolean=false;

ngOnInit(): void {
  
  let userID=localStorage.getItem("id");
  if(userID)
  {
    this._userService.allFriends().subscribe(
      (data:any[])=>
      {
        data = data.slice(0, 10);
          this.friends=data;
      },
      (error)=>
      {
        alert("Unable to load network");
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
