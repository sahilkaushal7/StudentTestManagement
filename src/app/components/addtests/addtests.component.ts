import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TestService } from "../../services/test.service";
import { AuthService } from '../../services/auth.service';
import { Test } from '../../models/Test';

@Component({
  selector: 'app-addtests',
  templateUrl: './addtests.component.html',
  styleUrls: ['./addtests.component.css']
})
export class AddtestsComponent implements OnInit {
  test:Test = {
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    subject:'',
    subjectid:'',
    question:'',
    testid:''
      
  }
  constructor(
    public router:Router,
    public testService:TestService,
    private authService:AuthService,
  ) { }

  ngOnInit() {
  }
  onSubmit({value,valid}:{value:Test,valid:boolean}){
    if(!valid)
    { 
      this.router.navigate(['addtest']);
      alert("Please fill the form correctly");
    }
    else
    {
      this.testService.newTest(value);
      this.router.navigate(['/questions']);
      alert("Student Successfully Added. Please test the account");
    }
  }
}
