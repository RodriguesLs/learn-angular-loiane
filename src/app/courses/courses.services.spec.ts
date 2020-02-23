import { CourseService } from './courses.service';

describe('Course service specs', () =>{

  let courseService: CourseService = new CourseService;

  // beforeEach(() => {
  // });
  
  it('Should list courses', () => {
    let courses = courseService.getCourses();
    expect(courses).toBeDefined();
    expect(courses.length).toEqual(3);
    expect(courses[0]).toEqual('Angular');
    expect(courses[1]).toEqual('Python');
  });

})