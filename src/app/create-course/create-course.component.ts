import { Component, OnInit } from '@angular/core';

import { CourseService } from '../courses/courses.service'

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [
    CourseService
  ]
})
export class CreateCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  
  courses: string[] = []
  
  ngOnInit() {
    this.courses = this.courseService.getCourses();  
  }

  addCourse(course: string) {
   this.courseService.addCourse(course);
  }

}
