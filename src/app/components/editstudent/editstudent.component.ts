import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../../services/students.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Student} from "../../models/Student";

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  id:string;
  student: Student =  {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    studentid:''
  }
  constructor(
    public studentService:StudentsService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    this.studentService.getStudent(this.id).valueChanges().subscribe(student =>
    {
      this.student = student;
      console.log(this.student);
    });
    
  }
  onSubmit({value,valid}:{value:Student,valid:boolean}){
    if(!valid)
    { 
      this.router.navigate(['editstudent/'+ this.id]);
      alert("Please fill the form correctly");
    }
    else
    {
      this.studentService.updateStudent(this.id,value);
      this.router.navigate(['/studentdetails/'+ this.id]);
      alert("Student Successfully Updated");
    }
  }

}
