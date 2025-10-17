import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //  Base URL of your Spring Boot backend
  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  // CREATE — Register a new student
  registerStudent(student: any): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

  // READ — Get all students
  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  //  READ — Get student by ID
  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //  UPDATE — Update existing student
  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${student.id}`, student);
  }

  //  DELETE — Delete student by ID
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
