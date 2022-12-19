import { Component } from '@angular/core';
import { Course } from './Models/course';
import { Student } from './Models/student';
import { User } from './Models/user';
import { AccountService } from './Services/account.service';
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

  constructor(private courseService: CourseService,
     private studentService: StudentService,
     private accountService: AccountService){}

  ngOnInit() : void {
    this.getCourses();
    this.getStudents();
    this.setCurrentUser();
    
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

  getCourses(){
    this.courseService
    .getCourses()
    .subscribe((result: Course[]) => (this.courses = result));
  }
  getStudents(){
    this.studentService
    .getStudents()
    .subscribe((result: Student[]) => (this.students = result));
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
