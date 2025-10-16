import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-module';

  constructor(private studentService: StudentService) {
    this.getStudentDetails();
  }

  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getStudentDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  studentDetails = null as any;

  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  studentToUpdate = {
    id: null as any,
    name: "",
    email: "",
    course: ""
  };

  edit(student: any) {
    this.studentToUpdate = { ...student };
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
