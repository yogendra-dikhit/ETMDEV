import { User } from './../model/user';
import { UserService } from './../service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private userName : string;
  private userPassword : string;

  private logged :any = undefined;
  constructor(private userService: UserService , private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  public login(){
    
      let user  = new User( this.userName, this.userPassword );
      console.log(user.userName , user.userPassword);
         this.userService.login(user).subscribe(data => this.logged =  data);


         if( this.logged.roleName === "Admin" ){
           console.log(this.logged.empId);
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
          
           this.router.navigate(['/admin']);
         }else if( this.logged.roleName === "Manager" ){
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
           this.router.navigate(['/manager']);
         }else if( this.logged.roleName === "Employee"){
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
           this.router.navigate(['/employee']);
         }
         //sessionStorage.setItem("userName",this.logged.userName);

  }

  public afterLogin(){
    console.log(this.logged);
  }

}
