import { Component } from '@angular/core';
import { EmployeesComponent } from './components/employees/employees';

@Component({
  selector: 'app-root',
  imports: [EmployeesComponent],
  template: `
    <nav class="teal">
      <div class="nav-wrapper container">
        <a class="brand-logo">Gestión de Empleados</a>
      </div>
    </nav>
    <div class="container" style="margin-top: 30px">
      <app-employees />
    </div>
  `
})
export class App {}
