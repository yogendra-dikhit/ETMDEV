import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <!-- Header 
  <div class="col-12 border border-primary  rounded bg-secondary ">
    <div class="row justify-content-start">
      <div class="col-5 justify-content-start"><a class="navbar-brand " href="#">Logo</a></div>
      <div class="col-7 mt-2 ">
        <span class="align-self-center navbar-brand .font-weight-bold " style=" color : white;align-content: center;font-size: 28px;">Employee Task Manager</span>
      </div>
    </div>
  </div>
  -->
    <div class="sticky-top" style=" " >
      <ul class="nav offset-3 justify-content-end">
      <li></li>
      <li class="nav-item">
        <a class="nav-link active" href="" (click)="logOut()">Log Out</a>
      </li>
    </ul>
  </div>
  
  
  `,
  styles: ["position: relative; line-height: 32px; font-size: 20px; top:0; right:0; width:1500px"]
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  public logOut(){
    sessionStorage.clear();
    localStorage.removeItem("logged");
    this.router.navigate(['/login']);

  }

}
