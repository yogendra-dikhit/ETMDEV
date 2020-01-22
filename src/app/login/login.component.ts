import { User } from './../model/user';
import { UserService } from './../service/user-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private userName : string;
  private userPassword : string;

  private logged :any = undefined;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  public async login(){
    
      let user  = new User( this.userName, this.userPassword );
      //console.log(user.userName , user.userPassword);
         this.logged = await  this.userService.login(user).subscribe(res => this.logged =  res);
      
  }


  public afterLogin(){
    console.log(this.logged);
  }

}
