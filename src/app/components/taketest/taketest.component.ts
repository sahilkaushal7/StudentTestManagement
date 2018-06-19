import { Component, OnInit } from '@angular/core';
import { ChoosesubjectService } from '../../services/choosesubject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../../models/Test';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {
  id:string;
  constructor(
    public choosesubject:ChoosesubjectService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
