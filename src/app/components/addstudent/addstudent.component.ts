import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Student } from "../../models/Student";
import { StudentsService } from "../../services/students.service";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  email:String;
  password:String;
  student:Student = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    studentid:''
  }
  constructor(
    public router:Router,
    public studentService:StudentsService,
    private authService:AuthService,
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
      this.authService.register(value.email as string,'123456')
      .then((res) => {
        console.log('Registered');
      })
      .catch((err) => {
      });
      this.router.navigate(['/login']);
      alert("Student Successfully Added. Please test the account");
    }
  }
}
