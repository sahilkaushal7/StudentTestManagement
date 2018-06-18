import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Test} from '../models/Test';
import { AngularFireList,AngularFireObject,AngularFireDatabase, snapshotChanges } 
from "angularfire2/database";
@Injectable()
export class TestService {
  tests: AngularFireList<any[]>;
  test: AngularFireObject<any>;
  h:number = 0;
  e:number = 0;
  m:number = 0;
  s:number = 0;
  ss:number = 0;
  ref1:any[]= new Array(this.h,this.e,this.m,this.s,this.ss);
  subject:string;
  constructor(
    public af:AngularFireDatabase
  ) { 
    this.tests = this.af.list('/subjects') as AngularFireList<Test[]>;
    
  }

  getTests(){
    return this.tests;  
  }
  newTest(test:any)
  {  
    // Working for inital scenario
    // this.ref = this.af.database.ref('/subjects/').push(test).key;
    this.subject = test.subject;
    switch(this.subject)
    {
      case 'Hindi': this.af.database.ref('/subjects/1/' + this.h).set(test);
      this.h++;
      break;
      case 'English': this.af.database.ref('/subjects/2/' + this.e).set(test);
      this.e++;
      break;
      case 'Maths': this.af.database.ref('/subjects/3/' + this.m).set(test);
      this.m++;
      break;
      case 'Science': this.af.database.ref('/subjects/4/' + this.s).set(test);
      this.s++;
      break;
      case 'SST': this.af.database.ref('/subjects/5/' + this.ss).set(test);
      this.ss++;
      break;
      
    }
  }
}
