import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
  public url: string;

  constructor(private _http:Http){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }
  getPrueba(){
    return 'Hola mundo desde el servicio';
  }

  getArticulos(){
    return this._http.get(this.url) // Método get del objeto Http
                      .map (res => res.json())/*Captura la respuesta de la petición. (res.json) convierte la respuesta en un objeto utilizable en el código*/

  }

}