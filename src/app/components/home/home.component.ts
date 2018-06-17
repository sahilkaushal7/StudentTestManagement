import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;

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
      } else {
        this.isLoggedIn = false;
      }
    });
    
  }

}
