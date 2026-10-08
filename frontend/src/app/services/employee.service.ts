import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private http = inject(HttpClient);
  private readonly URL = 'http://localhost:3000/api/employees';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.URL, employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.URL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.URL}/${id}`);
  }
}
