import { Component, OnInit } from '@angular/core';
import { ChoosesubjectService } from '../../services/choosesubject.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject : String;
  tests: any[];
  i:number = 0;
  constructor(
    public choosesubject:ChoosesubjectService,
    public testService:TestService
  ) { 
    
  
   }

  ngOnInit() {
    this.testService.getTests().valueChanges().subscribe(tests =>
      { 
          this.tests = tests;
      }); 
    console.log(this.i);
    if(this.i == 0)
    {
    localStorage.setItem('1',this.choosesubject.subject);
  console.log(this.subject);
  this.i++;
  console.log(this.i)}
  this.subject = localStorage.getItem('1');
  }
}
