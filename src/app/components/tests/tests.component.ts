import { Component, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: any[];
  constructor(public testService:TestService) 
  { 

  }  
  ngOnInit() {
    this.testService.getTests().valueChanges().subscribe(tests =>
      { 
          this.tests = tests;
      }); 
  }
}
