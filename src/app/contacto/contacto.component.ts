import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo: string;
  public parametro;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router
    ){
    this.titulo = "Página de contacto de la Web";
  }
  ngOnInit() {
    this._route.params.forEach((params: Params) => { //Método forEach del route. Lo que hace es recorrer todos los parámetros de la url
      this.parametro = params['page'];
    })
    console.log(' -<<<<<< Parametro ', this.parametro);
    /*En el callback utilizo una función => para poder salir del ámbito local de la función y asignar valores a las variables de la clase o llamar sus métodos. */
  }
  redirigir(){
    this._router.navigate(['/contacto','actycrea.es']);
  }
}