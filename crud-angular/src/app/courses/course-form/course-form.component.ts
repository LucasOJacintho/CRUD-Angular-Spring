import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from './../services/courses.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  category: Category[] = [
    {value: '', viewValue: ''},
    {value: 'Front-end', viewValue: 'Front-end'},
    {value: 'Back-end', viewValue: 'Back-end'},
    {value: 'Full-stack', viewValue: 'Full-stack'},
    {value: 'Dados', viewValue: 'Dados'},
  ];

  constructor(private formBuilder: FormBuilder, private courseService: CoursesService, private router: Router) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe((result: any) => console.log(result));
  }

  onCancel() {
    return null;
  }

  onInit(){
    this.router.navigate(['']);
  }

}
