import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public userName : string;
  ngOnInit() {
     

    // if( !(JSON.parse( localStorage.getItem("logged")).roleName === "Manager") ){
    //   this.router.navigate(['/login']);
    // }else  
    if( !( JSON.parse( sessionStorage.getItem("userName")) === "Manager") ){
      this.router.navigate(['/login']);

    }
    this.userName = JSON.parse( sessionStorage.getItem("userName"));
  }

}
