import { Component, OnInit } from '@angular/core';
import { ChoosesubjectService } from '../../services/choosesubject.service';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {
  subject:String;
  constructor(
    public choosesubject:ChoosesubjectService,
  ) { }

  ngOnInit() {
  }
  Subject(subject)
  { 
    switch(subject)
    {
        case 'Hindi' : this.choosesubject.selectedsubject('Hindi');
        break;
        case 'English' : this.choosesubject.selectedsubject('English');
        break;
        case 'Maths' : this.choosesubject.selectedsubject('Maths');
        break;
        case 'Science' : this.choosesubject.selectedsubject('Science');
        break;
        case 'SST' : this.choosesubject.selectedsubject('SST');
        break;
    }
  }
}
