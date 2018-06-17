import { Component, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";
import { Test } from "../../models/Test";
import { Observable } from "rxjs";
import { forEach } from '@firebase/util';

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
