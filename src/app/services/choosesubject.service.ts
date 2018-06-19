import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Test } from '../models/Test';

@Injectable({
  providedIn: 'root'
})
export class ChoosesubjectService {
  subject: AngularFireObject<any>;
  constructor(public af:AngularFireDatabase) { }

  getStudent(id:string){
    this.subject = this.af.object('/students/'+id) as AngularFireObject<Test>;
    return this.subject;
  }
}
