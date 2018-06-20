import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../../services/students.service";
import { Student } from "../../models/Student";
import { Observable } from "rxjs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[];
  constructor(public studentService:StudentsService) 
  { 

  }  
  ngOnInit() {
    this.studentService.getStudents().valueChanges().subscribe(students =>
      {   
          this.students = students;
      }); 
  }

}
