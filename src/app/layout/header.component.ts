import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
  <!-- Header -->
  <div class="col-12 border border-primary bg-secondary rounded ">
    <div class="row justify-content-start">
      <div class="col-5 justify-content-start"><a class="navbar-brand " href="#">Logo</a></div>
      <div class="col-7 mt-2 ">
        <span class="align-self-center navbar-brand" style="align-content: center;font-size: large;">Employee Task Manager</span>
      </div>
    </div>
    
    <div >
      <ul class="nav offset-3 justify-content-end">
      <li></li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  </div>
  
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
