import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Student } from "../../models/Student";
import { StudentsService } from "../../services/students.service";
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  student:Student = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    studentid:0
  }
  constructor(
    public router:Router,
    public studentService:StudentsService
  ) { }

  ngOnInit() {
  }
  onSubmit({value,valid}:{value:Student,valid:boolean}){
    if(!valid)
    { 
      this.router.navigate(['addstudent']);
      alert("Please fill the form correctly");
    }
    else
    {
      this.studentService.newStudent(value);
      this.router.navigate(['/']);
      alert("Client Successfully Added");
    }
  }
}
