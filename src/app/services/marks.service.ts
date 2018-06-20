import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Marks } from '../models/Marks';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  marks: AngularFireList<any[]>;
  mark: AngularFireObject<any>;
  ref:any;
  constructor(
    public af:AngularFireDatabase
  ) { 
    this.marks = this.af.list('/marks') as AngularFireList<Marks[]>;
  }

  getMarks(){
    return this.marks;  
  }
  addMarks(mark:any)
  {  
    this.ref = this.af.database.ref('/marks/').push(mark);
  }
}
