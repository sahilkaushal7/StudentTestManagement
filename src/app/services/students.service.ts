import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Student} from '../models/Student';
import { AngularFireList,AngularFireObject,AngularFireDatabase, snapshotChanges } 
from "angularfire2/database";
@Injectable()
export class StudentsService {
  students: AngularFireList<any[]>;
  student: AngularFireObject<any>;
  ref:any;
  constructor(
    public af:AngularFireDatabase
  ) { 
    this.students = this.af.list('/students') as AngularFireList<Student[]>;
  }

  getStudents(){
    return this.students;  
  }
  newStudent(student:any)
  {  
    this.ref = this.af.database.ref('/students/').push(student).key;
    this.af.database.ref('/students/' + this.ref + '/studentid').set(this.ref);
  }
  getStudent(id:string){
    this.student = this.af.object('/students/'+id) as AngularFireObject<Student>;
    return this.student;
  }
  deleteStudent(id:string)
  {
    return this.students.remove(id);
  }
  updateStudent(id:any,student:any){
    return this.students.update(id,student);
  }
}
