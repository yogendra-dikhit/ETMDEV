import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  template: `
    <p>
      manager works!
    </p>
  `,
  styles: []
})
export class ManagerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("userName"));
    if( !(sessionStorage.getItem("userName") === "Manager") ){
      this.router.navigate(['/login']);
    }
  
  }

}
