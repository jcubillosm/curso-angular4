import { Component } from '@angular/core';
import { Empleado }  from './empleado';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  public titulo = 'Componente Empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;
  
  constructor(){
    this.empleado = new Empleado('David', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Manuel', 33, 'Programador', false),
      new Empleado('Maria', 22, 'Programador', true),
      new Empleado('Carlos', 30, 'Diseñador', false)
    ];
    this.trabajador_externo = true;
    this.color = 'red';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
  }
  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }
  logColorSeleccionado(){
    console.log('Color seleccionado ',this.color_seleccionado);
  }
}