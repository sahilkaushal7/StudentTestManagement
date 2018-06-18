import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoosesubjectService {
  subject:string;
  constructor() { }

  selectedsubject(subject1){
    this.subject = subject1;
  }
}
