import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  public userName : string;
  ngOnInit() {
    
    console.log(sessionStorage.getItem("userName"));
    if( !( JSON.parse( sessionStorage.getItem("userName") ) === "Admin") 
    //&& !(JSON.parse( localStorage.getItem("logged")).roleName === "Admin") 
    ){
      this.router.navigate(['/login']);
    }
    this.userName = JSON.parse( sessionStorage.getItem("userName"));
  
  }

}
