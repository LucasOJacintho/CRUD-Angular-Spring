import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'Java', category:'Back-end'},
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses=[];
  }

  ngOnInit(): void {
  }

}
