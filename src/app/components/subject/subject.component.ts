import { Component, OnInit } from '@angular/core';
import { ChoosesubjectService } from '../../services/choosesubject.service';
import { TestService } from '../../services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../../models/Test';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject : String;
  test:Test = {
    $key:
      {$key:
        {
        subject:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        quesiton:'',
        subjectid:'',
        testid:'',
        co:''
       }
    }
      
  }
  tests: any[];
  id:number;
  element:any;
  constructor(
    public choosesubject:ChoosesubjectService,
    public testService:TestService,
    public router:Router,
    public route:ActivatedRoute
  ) { 
    
  
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.testService.getTests().valueChanges().subscribe(tests =>
      { 
          this.tests = tests;
          this.tests = tests[this.id];
      });
      console.log(this.id);
      
  }
  onSubmit(){
    // this.element = document.getElementById('1');
    // console.log(this.element);
  }
}
