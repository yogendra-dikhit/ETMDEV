import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  template: `
  <!-- Header -->
  <app-side-bar ></app-side-bar>
  <app-header ></app-header>
<div class="row" style="margin-left: +250px;">
<p>Welcome:{{userName}}</p>
</div>

<app-footer></app-footer>
 
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("userName"));
    if( !( JSON.parse( sessionStorage.getItem("userName") ) === "Employee") ){
      this.router.navigate(['/login']);
    }
  }

}
