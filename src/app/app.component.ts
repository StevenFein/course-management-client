import { Component } from '@angular/core';
import { Course } from './Models/course';
import { CourseService } from './Services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-management-client';
  courses: Course[] = [];
  courseToEdit?: Course;

  constructor(private courseService: CourseService){}

  ngOnInit() : void {
    this.courseService
    .getCourses()
    .subscribe((result: Course[]) => (this.courses = result));
  }

  updateCourseList(courses: Course[]){
    this.courses = courses;
  }

  initNewCourse(){
    this.courseToEdit = new Course();
  }

  editCourse(course: Course){
    this.courseToEdit = course;
  }
}
