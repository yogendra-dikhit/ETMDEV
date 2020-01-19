import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <!-- Header -->
  <div class="col-12 border border-primary bg-secondary rounded " style="height: 10vh;">
    <div class="row justify-content-start">
      <div class="col-5 justify-content-start"><a class="navbar-brand " href="#">Logo</a></div>
      <div class="col-7 mt-2 ">
        <span class="align-self-center navbar-brand" style="align-content: center;font-size: large;">Employee Task Manager</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center align-content-center" style="height: 70vh;" >
      <form action="">
          <input type="text" id="login" class="form-control" name="login" placeholder="login">
          <br>
          <input type="password" id="password" class="form-control" name="login" placeholder="password">
          <br>
          <input type="submit" class="btn btn-primary" value="Log In">
          
        </form>
  </div>
  
  
  <app-footer></app-footer>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
