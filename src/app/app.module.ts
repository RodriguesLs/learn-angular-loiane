import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/courses.service';
// import { CreateCourseComponent } from './create-course/create-course.component'
import { CreateCourseModule } from './create-course/create-course.module'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    // CreateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateCourseModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
