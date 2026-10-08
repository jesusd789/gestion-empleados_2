import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

declare const M: any; // Materialize (cargado por CDN en index.html)

@Component({
  selector: 'app-employees',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './employees.html'
})
export class EmployeesComponent implements OnInit {
  private service = inject(EmployeeService);

  employees: Employee[] = [];
  employee: Employee = this.emptyEmployee();

  ngOnInit(): void {
    this.getEmployees();
  }

  emptyEmployee(): Employee {
    return { nombre: '', cargo: '', oficina: '', salario: 0 };
  }

  getEmployees(): void {
    this.service.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: () => this.toast('No se pudo conectar con el servidor')
    });
  }

  save(form: NgForm): void {
    if (form.invalid) return;

    const request = this.employee._id
      ? this.service.updateEmployee(this.employee._id, this.employee)
      : this.service.createEmployee(this.employee);
    const msg = this.employee._id ? 'Empleado actualizado' : 'Empleado guardado';

    request.subscribe({
      next: () => {
        this.toast(msg);
        this.reset(form);
        this.getEmployees();
      },
      error: (err) => this.toast(err.error?.message ?? 'Error al guardar')
    });
  }

  edit(emp: Employee): void {
    this.employee = { ...emp };
  }

  delete(id: string): void {
    if (!confirm('¿Seguro que deseas eliminar este empleado?')) return;
    this.service.deleteEmployee(id).subscribe({
      next: () => {
        this.toast('Empleado eliminado');
        this.getEmployees();
      },
      error: () => this.toast('Error al eliminar')
    });
  }

  reset(form?: NgForm): void {
    form?.resetForm();
    this.employee = this.emptyEmployee();
  }

  private toast(html: string): void {
    M.toast({ html });
  }
}
