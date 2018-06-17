import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
  }
  onGoogle()
  {
      this.authService.signInWithGoogle()
           .then((res) => {
              this.router.navigate(['/home'])
           })
           .catch((err) => console.log(err));
      }
  onFacebook()
      {
          this.authService.signInWithFacebook()
               .then((res) => {
                  this.router.navigate(['/home'])
               })
               .catch((err) => console.log(err));
          }
          
  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.router.navigate(['/login']);
      });
  }

}
