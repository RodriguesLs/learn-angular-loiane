import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class CourseService {

  private courses: string[] = ['Angular', 'Python', 'Ruby']; 

  static emitCourse = new EventEmitter<string>();

  constructor() {
    console.log('QTS?');
  }

  getCourses(){
    return this.courses;  
  }

  addCourse(course: string) {
    this.courses.push(course);
    CourseService.emitCourse.emit(course);
  }
}