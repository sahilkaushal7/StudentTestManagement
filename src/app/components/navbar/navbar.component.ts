import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { timeout } from 'rxjs/operators';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;
  userPhotoUrl:string;
  students: any[];
  role:String;
  constructor(
    private authService:AuthService,
    private router:Router,
    public studentService:StudentsService
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
        this.userPhotoUrl = auth.photoURL;
      } else {
        this.isLoggedIn = false;
      }
      console.log(this.loggedInUser);
    });
    
  }

  onLogoutClick(){
    this.authService.logout();
    alert('Logged Out Succesfully');
    this.router.navigate(['/login']);
  }

}
