import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component ({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent{
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(private _peticionesService: PeticionesService){
    this.coche = new Coche('','','');
    this.coches = [
      new Coche('Seat Panda','120','Blanco'),
      new Coche('Renault Clio','80','Rojo')
    ];
  }
  ngOnInit(){
    console.log(this._peticionesService.getPrueba());
    /*Para poder recoger la respuesta del ajax del servicio en un componente que utilice a dicho servicio es necesario utilizar el método subscribe(). Este método tiene dos funciones de callback: 1. para capturar el resultado. 2. para capturar el error*/
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        if(!this.articulos){
          console.log('Error en el servidor ');
        }
      },
      error => {
        var errorMessage = <any>error; //cast del tipo
        console.log(errorMessage)
      }
    );
  }
  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche('','','');
    console.log(this.coche);
  }
}
