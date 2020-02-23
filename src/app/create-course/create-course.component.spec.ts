import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';
import { CourseService } from '../courses/courses.service';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent ],
      providers: [CourseService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be render', () => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('create-course');
  });

  it('shoud be render courses too', () => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // console.log(compiled);
    const courses = compiled.querySelectorAll('li');
    expect(courses[0].textContent).toContain('Angular');
    expect(courses[1].textContent).toContain('Python');
    expect(courses[2].textContent).toContain('Ruby');
    // expect(compiled.querySelector('li').textContent).toBe('Python');
  })
});
