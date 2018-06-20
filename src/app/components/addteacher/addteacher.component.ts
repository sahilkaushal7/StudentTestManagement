import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  email:String;
  password:String;
  teacher:Teacher = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    role:''
  }
  constructor(
    public afAuth:AngularFireAuth,
    public router:Router,
    public teacherService:TeacherService,
    private authService:AuthService,
  ) { }

  ngOnInit() {
  }
  onSubmit({value,valid}:{value:Teacher,valid:boolean}){
    if(!valid)
    { 
      this.router.navigate(['addteacher']);
      alert("Please fill the form correctly");
    }
    else
    { 
      this.teacherService.newTeacher(value);
      this.authService.register(value.email as string,'123456')
      .then((res) => {
        console.log('Registered');
      })
      .catch((err) => {
      });
      this.router.navigate(['login']);
      this.afAuth.auth.signOut();
      window.location.reload();
      alert("Teacher Successfully Added. Please Login Again");
    }
  }
}

