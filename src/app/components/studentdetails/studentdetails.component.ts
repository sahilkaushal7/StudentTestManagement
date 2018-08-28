import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../../services/students.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Student} from "../../models/Student";

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  id:string;
  student:Student;
  constructor(
    public studentService:StudentsService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);    
    this.studentService.getStudent(this.id).valueChanges().subscribe(student =>
    {
      this.student = student;
      console.log(this.student);
    });
    
  }
  onDeleteClick()
  {
    if(confirm('Are you sure, you want to delete this student?'))
    { 
      this.router.navigate(['/dashboard']);
      this.studentService.deleteStudent(this.id);
      alert('Student Deleted Successfully');
    }
  }
  

}
