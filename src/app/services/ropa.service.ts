import { Injectable } from '@angular/core';

 
@Injectable()
export class RopaService{
  public nombre_prenda: string;
  public coleccion_ropa: Array<any>;

  constructor(){
    this.nombre_prenda = 'Pantalones vaqueros';
    this.coleccion_ropa = ['Pantalones blancos', 'camiseta roja'];
  }
  prueba(){
    return this.nombre_prenda;
  }
  addRopa(nombre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }
  getRopa():Array<string>{
    return this.coleccion_ropa;
  }
  deleteRopa(index:number){
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }
}