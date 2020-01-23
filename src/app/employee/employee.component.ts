import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  template: `
    <p>
      employee works!
    </p>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("userName"));
    if( !(sessionStorage.getItem("userName") === "Manager") ){
      this.router.navigate(['/login']);
    }
  }

}
