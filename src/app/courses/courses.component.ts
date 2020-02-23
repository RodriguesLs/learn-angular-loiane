import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [
    CourseService
  ]
})
export class CoursesComponent implements OnInit {

  // courseService: CourseService = new CourseService;
  courses: string[] = [];

  constructor(private courseService: CourseService) { 
  }
  
  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
