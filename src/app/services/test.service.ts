import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Test} from '../models/Test';
import { AngularFireList,AngularFireObject,AngularFireDatabase, snapshotChanges } 
from "angularfire2/database";
@Injectable()
export class TestService {
  tests: AngularFireList<any[]>;
  test: AngularFireObject<any>;
  ref:any;
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
    this.ref = this.af.database.ref('/subjects/').push(test).key;
    this.af.database.ref('/subjects/' + this.ref + '/subject/test/subjectid').set(this.ref);
  }
}
