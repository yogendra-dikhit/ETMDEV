import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {
  
  public userName : string ;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    if( localStorage.length > 0 ){
      sessionStorage.setItem("userName",JSON.stringify(localStorage.getItem("loginRole")));
      
    }else if( !( JSON.parse( sessionStorage.getItem("userName")) === "Employee") ){
      this.router.navigate(['/login']);

    }
    this.userName = JSON.parse( sessionStorage.getItem("userName"));
  }

}
