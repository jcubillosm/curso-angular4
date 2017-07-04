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
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    })
    console.log(' -<<<<<< Parametro ', this.parametro);
  }
  redirigir(){
    this._router.navigate(['/contacto','actycrea.es']);
  }
}