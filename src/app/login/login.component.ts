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
  private checkbox : boolean;

  private logged :any ;
  constructor(private userService: UserService , private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.userName = undefined;
    this.userPassword = undefined;
    this.checkbox = undefined;
    this.logged = undefined;

    //sessionStorage.clear();
    
    if( sessionStorage.length > 0 || localStorage.length > 0 ){
      if( (JSON.parse( sessionStorage.getItem("userName") ) === "Manager") 
       || localStorage.length > 0
      ){
        this.router.navigate(['/manager']);
      }else if( (JSON.parse( sessionStorage.getItem("userName") ) === "Admin") 
       || localStorage.length > 0 
      ){
        
        this.router.navigate(['/admin']);

      }
      else if( (JSON.parse( sessionStorage.getItem("userName") ) === "Employee") 
      || localStorage.length > 0
      //JSON.parse( localStorage.getItem("logged")).roleName === "Employee" 
      ){
        this.router.navigate(['/employee']);
      }
    }
    
  }
  public login(){

      let user  = new User( this.userName, this.userPassword );

      this.userService.login(user).subscribe(data => this.logged =  data);
      
    if( !( this.logged === undefined ) ){

         if( this.checkbox === true  ){
           localStorage.setItem("logged",JSON.stringify( this.logged ));
           localStorage.setItem("loginRole",JSON.stringify( this.logged.roleName ));
         }
         if( this.logged.roleName === "Admin" ){
          console.log(this.logged);
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
          
<<<<<<< HEAD
           this.router.navigate(['/admin']);
         }else if( this.logged.roleName === "Manager"){
=======
          this.router.navigate(['/admin']);
         }else if( this.logged.roleName === "Manager" ){
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
>>>>>>> 77b29462afdcc8905fe80ee376e5d444d9a25b2c
           this.router.navigate(['/manager']);
         }else if( this.logged.roleName === "Employee"){
          sessionStorage.setItem("userName", JSON.stringify( this.logged.roleName ));
           this.router.navigate(['/employee']);
         }else{
          this.router.navigate(['/login']);
         }
        
      }
  }


}
