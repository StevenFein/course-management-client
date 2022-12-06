import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
@Input() course?: Course;
@Output() courseUpdated = new EventEmitter<Course[]>();
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  updateCourse(course: Course){
    this.courseService
    .updateCourse(course)
    .subscribe((courses: Course[]) => this.courseUpdated.emit(courses));
  }
  deleteCourse(course: Course){
    this.courseService
    .deleteCourse(course)
    .subscribe((courses: Course[]) => this.courseUpdated.emit(courses));
  }
  createCourse(course: Course){
    this.courseService
    .createCourse(course)
    .subscribe((courses: Course[]) => this.courseUpdated.emit(courses));
  }

}
