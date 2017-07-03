import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public nombre_componente     = 'Componente de fruta';
  public listado_frutas        = 'Naranja, Manzana, Pera y Sandia';
  private temp                 = 'Soy privada y no importa';

  public nombre:       string;
  public edad:         number;
  public mayorEdad :   boolean;
  public trabajos:     Array<string>;
  public datos:        Array<any>;

  comodin:  any  = 23;

  //Inicialización de las propiedades
  constructor() {
    this.nombre      =  'Meg';
    this.edad        =  17;
    this.mayorEdad   =  true;
    this.comodin    =   'Si';
  }
  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(45);
    console.log(this.nombre+ ' '+ this.edad);

    //Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno === 8) {
      let uno = 3;
      var dos = 88;
      console.log('Dentro de IF '+ uno +' '+ dos);
    }
    console.log('Fuera de IF '+ uno + ' ' +dos);
  }
  cambiarNombre() {
    this.nombre = 'Roberts';
  }
  cambiarEdad(edad) {
    this.edad = edad;
    
  }
}