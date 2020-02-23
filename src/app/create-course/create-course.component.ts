import { Component, OnInit } from '@angular/core';

import { CourseService } from '../courses/courses.service'

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  
  ngOnInit() {
    
  }

  addCourse(course: string) {
   this.courseService.addCourse(course);
  }

}
