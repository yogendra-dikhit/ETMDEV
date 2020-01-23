import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `

  <!-- Header -->
  <app-header></app-header>
<div class="row">
    <div class="col-2">
    <app-side-bar></app-side-bar>
    </div>
    <div class="row col-10 justify-content-center align-content-center" style="height: 70vh;" >
        <form action="">
            <input type="text" id="login" class="form-control" name="login" placeholder="login">
            <br>
            <input type="password" id="password" class="form-control" name="login" placeholder="password">
            <br>
            <input type="submit" class="btn btn-primary" value="Log In">
            
          </form>
    </div>
</div>

<app-footer></app-footer>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(sessionStorage.getItem("userName"));
  }

}
