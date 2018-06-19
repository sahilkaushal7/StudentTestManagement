import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Test} from '../models/Test';
import { AngularFireList,AngularFireObject,AngularFireDatabase, snapshotChanges } 
from "angularfire2/database";
import { ENGINE_METHOD_DIGESTS } from 'constants';
@Injectable()
export class TestService {
  tests: AngularFireList<any[]>;
  test: AngularFireObject<any>;
  h:number = 0;
  e:number = 0;
  m:number = 0;
  s:number = 0;
  ss:number = 0;
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
      if(this.h<4)
      {this.h++;}
      break;
      case 'English': this.af.database.ref('/subjects/2/' + this.e).set(test);
      if(this.e<4)
      {this.e++;}
      break;
      case 'Maths': this.af.database.ref('/subjects/3/' + this.m).set(test);
      if(this.m<4)
      {this.m++;}
      break;
      case 'Science': this.af.database.ref('/subjects/4/' + this.s).set(test);
      if(this.s<4)
      {this.s++;}
      break;
      case 'SST': this.af.database.ref('/subjects/5/' + this.ss).set(test);
      if(this.ss<4)
      {this.ss++;}
      break;
      
    }
  }
}
