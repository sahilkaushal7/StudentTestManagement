import { Component, OnInit } from '@angular/core';
import { ChoosesubjectService } from '../../services/choosesubject.service';
import { TestService } from '../../services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../../models/Test';
import { Marks } from '../../models/Marks';
import { AuthService } from '../../services/auth.service';
import { MarksService } from "../../services/marks.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject : String;
  mark:Marks = 
  {
    marks:0,
    email:'',
    subject:'',
    attempt:[]
  }
  tests: any[];
  id:number;
  marks1:any[];
  element:any;
  checked:string;
  selected:string;
  ans0 : string;
  ans1 : string;
  ans2 : string;
  ans3 : string;
  ans4 : string;
  marks:number=0;
  loggedInUser:string;
  attemptno:number=0;
  constructor(
    private authService:AuthService,
    public testService:TestService,
    public router:Router,
    public route:ActivatedRoute,
    public marksService:MarksService
  ) { 
    
  
   }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.loggedInUser = auth.email;
      } else {
      }
    });
    this.id = this.route.snapshot.params['id'];
    this.testService.getTests().valueChanges().subscribe(tests =>
      { 
          this.tests = tests;
          this.tests = tests[this.id];
      });
      
  }
  onSubmit(){
    alert("You have scored " + this.marks + " out of 50");
    this.mark.email=this.loggedInUser;
    this.mark.marks = this.marks;
    this.mark.subject = this.tests[this.id].subject;
    this.mark.attempt.push(this.attemptno);
    this.marksService.addMarks(this.mark);
    
    window.location.reload();
  }
  value(checked,selected)
  {
    this.checked=checked;
    this.selected=selected;
    console.log(this.checked + this.selected );
    if(this.checked == '0')
    {
      this.ans0 = this.selected;
      if(this.ans0 == this.tests[0].CO)
      this.marks = this.marks + 10;
    }
    if(this.checked == '1')
    {
      this.ans1 = this.selected;
      if(this.ans0 == this.tests[1].CO)
      this.marks = this.marks + 10;
    }
    if(this.checked == '2')
    {
      this.ans2 = this.selected;
      if(this.ans0 == this.tests[2].CO)
      this.marks = this.marks + 10;
    }
    if(this.checked == '3')
    {
      this.ans3 = this.selected;
      if(this.ans0 == this.tests[3].CO)
      this.marks = this.marks + 10;
    }
    if(this.checked == '4')
    {
      this.ans4 = this.selected;
      if(this.ans0 == this.tests[4].CO)
      this.marks = this.marks + 10;
    }
  }
}
