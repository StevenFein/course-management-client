import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url="BasicCourse";
  private getAll = "GetAllCourses";
  private update = "OldUpdateCourse";
  private create = "OldCreateCourse";
  private delete = "Old";
  constructor(private http: HttpClient) { }

  public getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/${this.url}/${this.getAll}`);
  }

  public updateCourse(course: Course) : Observable<Course[]>{
    return this.http.put<Course[]>(`${environment.apiUrl}/${this.url}/${this.update}`, course);
  }

  public createCourse(course: Course) : Observable<Course[]>{
    return this.http.post<Course[]>(`${environment.apiUrl}/${this.url}/${this.create}`, course);
  }

  public deleteCourse(course: Course) : Observable<Course[]>{
    return this.http.delete<Course[]>(`${environment.apiUrl}/${this.url}/${this.delete}${course.id}`);
  }
}
