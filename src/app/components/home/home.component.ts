import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"; 
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;
  students:any[];
  role:String;
  constructor(
    private authService:AuthService,
    private router:Router,
    public studentService : StudentsService
    // private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.studentService.getStudents().valueChanges().subscribe(students =>
      {   
          this.students= students;
      }); 
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    
  }
}
