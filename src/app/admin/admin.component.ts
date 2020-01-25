import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

@Component({
  selector: 'app-add',
  templateUrl: './add/add.component.html'
})

export class AdminComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  public userName : string;
  @Input()
  public  list :string [] = ["Profile","Add","List"];

  ngOnInit() {
    
    if( localStorage.length > 0 ){
      sessionStorage.setItem("userName",JSON.stringify(localStorage.getItem("loginRole")));
      
    }else if( !( JSON.parse( sessionStorage.getItem("userName")) === "Admin") ){
      this.router.navigate(['/login']);

    }
    this.userName = JSON.parse( sessionStorage.getItem("userName"));
  
  }

}
