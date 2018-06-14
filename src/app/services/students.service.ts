import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Student} from '../models/Student';
import { AngularFireList,AngularFireObject,AngularFireDatabase } 
from "angularfire2/database";
@Injectable()
export class StudentsService {
  students: AngularFireList<any[]>;
  student: AngularFireObject<any>;

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
    this.students.push(student);
  }
  getStudent(id:string){
    this.student = this.af.object('/students/'+id) as AngularFireObject<Student>;
    return this.student;
  }
}
