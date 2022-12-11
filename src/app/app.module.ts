import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCourseComponent } from './Components/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './Components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
