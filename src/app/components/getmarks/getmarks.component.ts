import { Component, OnInit } from '@angular/core';
import { MarksService } from '../../services/marks.service';

@Component({
  selector: 'app-getmarks',
  templateUrl: './getmarks.component.html',
  styleUrls: ['./getmarks.component.css']
})
export class GetmarksComponent implements OnInit {
  marks:any[]
  constructor(
    public marksService:MarksService
  ) { }

  ngOnInit() {
    this.marksService.getMarks().valueChanges().subscribe(marks =>
      {
        this.marks=  marks;
        console.log(this.marks);
      });
  }
  
}
