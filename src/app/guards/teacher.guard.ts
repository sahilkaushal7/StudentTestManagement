import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StudentsService } from '../services/students.service';
@Injectable()
export class TeacherGuard implements CanActivate {
  isLoggedIn:boolean;
  loggedInUser:string;
  students:any[];
  role: any;
  constructor(
    private authService:AuthService,
    private router:Router,
    public studentService : StudentsService
  ) { }
    canActivate(): boolean{
      this.authService.getAuth().subscribe(auth => {
        if(auth){
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });
        this.studentService.getStudents().valueChanges().subscribe(students =>
            {   
                this.students = students;
                this.students.forEach(e =>
                    {
                    this.students = e;
                    if(this.students.email == this.loggedInUser)
                   this.role = this.students.role;
            });
            }); 
      
        if(this.loggedInUser == 'stmuserlogin1234@gmail.com' || this.role == 'teacher')
        return true;
        else
        {
        this.router.navigate(['/home']);
        return false;
      }

    }
}