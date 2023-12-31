import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router){}

  friends:any[]=[];
  action:boolean=true;


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
