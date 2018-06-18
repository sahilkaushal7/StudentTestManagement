import { Component, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: any[];
  h:number[]= new Array();
  e:number[]= new Array();
  m:number[]= new Array();
  s:number[]= new Array();
  ss:number[]= new Array();
  
  
  constructor(public testService:TestService) 
  { 

  }  
  ngOnInit() {
    this.testService.getTests().valueChanges().subscribe(tests =>
      { 
          this.tests = tests;
          for(let i = 0;i<this.tests[0].length;i++){
            this.h.push(i);
          }
          for(let i = 0;i<this.tests[1].length;i++){
            this.e.push(i);
          }
          for(let i = 0;i<this.tests[2].length;i++){
            this.m.push(i);
          }
          for(let i = 0;i<this.tests[3].length;i++){
            this.s.push(i);
          }
          for(let i = 0;i<this.tests[4].length;i++){
            this.ss.push(i);
          }
          console.log(this.ss);
          console.log(this.s);
          console.log(this.m);
          console.log(this.h);
          console.log(this.e);



      }); 
  }
}
