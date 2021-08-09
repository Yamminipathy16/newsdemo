import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output',
  template:`<button (click)="fireevent()">Send</button>`,
  //templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() public child = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireevent()
  {
    this.child.emit("Welcome");
  }

}
