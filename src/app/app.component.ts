import { Component } from '@angular/core';
import { Course } from './Models/course';
import { Student } from './Models/student';
import { CourseService } from './Services/course.service';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-management-client';
  courses: Course[] = [];
  courseToEdit?: Course;

  students: Student[] = [];
  studentToEdit?: Student;

  constructor(private courseService: CourseService, private studentService: StudentService){}

  ngOnInit() : void {
    this.courseService
    .getCourses()
    .subscribe((result: Course[]) => (this.courses = result));

    this.studentService
    .getStudents()
    .subscribe((result: Student[]) => (this.students = result));
  }

  updateCourseList(courses: Course[]){
    this.courses = courses;
  }
  updateStudentList(students: Student[]){
    this.students = students;
  }

  initNewCourse(){
    this.courseToEdit = new Course();
  }
  initNewStudent(){
    this.studentToEdit = new Student();
  }

  editCourse(course: Course){
    this.courseToEdit = course;
  }
  editStudent(student: Student){
    this.studentToEdit = student;
  }
}
