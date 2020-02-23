import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  private courses: string[] = ['Angular', 'Python', 'Ruby']; 

  getCourses(){
    return this.courses;  
  }

  addCourse(course: string) {
    this.courses.push(course);
  }
}