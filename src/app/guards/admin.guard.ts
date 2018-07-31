import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AdminGuard implements CanActivate {
  isLoggedIn:boolean;
  loggedInUser:string;
  role:String;
  constructor(
    private authService:AuthService,
    private router:Router
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
        if(this.loggedInUser == 'stmuserlogin1234@gmail.com')
        return true;
        else
        {
        this.router.navigate(['/home']);
        return false;
      }

    }
}