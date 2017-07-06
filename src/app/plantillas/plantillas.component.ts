import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
})
export class PlantillasComponent{
  public titulo;
  public administrador;
  public dato_externo ="Mario Casas";
  public datos_del_hijo;
  public identity = {
    id: 1,
    web: 'Andrea García',
    tematica: 'Desarrollo web'
  };

  constructor(){
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = true;
  }
  cambiar(value){
    this.administrador = value;
  }

  recibirDatos(event){
    console.log(event.nombre);
    this.datos_del_hijo = event;
  }
}