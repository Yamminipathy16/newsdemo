import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  template:`{{'Hello '  + parentData }}
  <br>{{'Your Age is  '+parentAge}} `
,
  
  //templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() public parentData: any;
@Input() public parentAge: any;
  constructor() { }

  ngOnInit(): void {
  }

}
