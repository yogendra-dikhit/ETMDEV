import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-manager',
<<<<<<< HEAD
  template: './manager.component.html',
  styles: ['./manager.component.css']
=======
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
>>>>>>> 77b29462afdcc8905fe80ee376e5d444d9a25b2c
})

export class ManagerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  public userName : string;
  @Input()
  public  list :string [] = ["Profile","Add","List"];

  ngOnInit() {
     

    if( localStorage.length > 0 ){
      sessionStorage.setItem("userName",JSON.stringify(localStorage.getItem("loginRole")));
      
    }else if( !( JSON.parse( sessionStorage.getItem("userName")) === "Manager") ){
      this.router.navigate(['/login']);

    }
    this.userName = JSON.parse( sessionStorage.getItem("userName"));
  }

}
