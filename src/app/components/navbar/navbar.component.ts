import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { timeout } from 'rxjs/operators';

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

  constructor(
    private authService:AuthService,
    private router:Router,
    // private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.userPhotoUrl = auth.photoURL;
      } else {
        this.isLoggedIn = false;
      }
    });
    
  }

  onLogoutClick(){
    this.authService.logout();
    alert('Logged Out Succesfully');
    this.router.navigate(['/login']);
  }

}
