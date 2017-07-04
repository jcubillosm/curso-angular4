import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component ({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent{
  public titulo: string;
  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;
  public fecha;
  public nombre;

  constructor( private _ropaService: RopaService  ){
    this.titulo = "Página principal";
    this.fecha = new Date(2017, 4, 15);
    this.nombre = 'JUaN LoPeX MaRTiNEX';
  }
  ngOnInit(){
    console.log(this._ropaService.prueba());
    this.listado_ropa = this._ropaService.getRopa();
  }
  guardarPrenda(){
    this.listado_ropa = this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }
  eliminarPrenda(index:number){
    this.listado_ropa = this._ropaService.deleteRopa(index);
  }
}