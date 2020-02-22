import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseService: CourseService = new CourseService;
  courses: string[] = [];

  constructor() { 
    this.courses = this.courseService.getCourses();
  }

  ngOnInit() {
  }

}
