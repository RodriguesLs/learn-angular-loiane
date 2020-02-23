import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CreateCourseComponent } from './create-course.component'
import { CourseService } from '../courses/courses.service'
@NgModule({

  declarations: [
    CreateCourseComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCourseComponent
  ],
  providers: [
    // CourseService
  ]
})

export class CreateCourseModule { }