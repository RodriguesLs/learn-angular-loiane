import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoursesComponent } from './courses.component'
import { CourseService } from './courses.service'

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    // CourseService
  ]
})

export class CoursesModule { }