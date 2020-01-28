import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  public counter =40;
  constructor() { }

  ngOnInit() {
  }
  onDecrement(): void {
    this.counter -= 1;
    }
}
