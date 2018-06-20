import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: AngularFireList<any[]>;
  teacher: AngularFireObject<any>;
  ref:any;
  constructor(
    public af:AngularFireDatabase
  ) { 
    this.teachers = this.af.list('/students') as AngularFireList<Teacher[]>;
  }

  getteachers(){
    return this.teachers;  
  }
  newTeacher(teacher:any)
  { 
    this.ref = this.af.database.ref('/students/').push(teacher).key;
  }
}
