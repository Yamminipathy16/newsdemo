import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
 public students:Student[];
  constructor(service:StudentService) {this.students=service.getall(); }
 
  ngOnInit(): void {
  }

}
