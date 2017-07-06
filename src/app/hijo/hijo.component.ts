import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: 'hijo.component.html'
})

export class HijoComponent{
  public title: string;
  
  @Input() propiedad_uno: string;
  @Input('texto') propiedad_dos: string;
  @Input('dato') propiedad_tres: string;
  @Input() propiedad_cuatro: Array<any>;
  @Output() desde_el_hijo = new EventEmitter();

  constructor(){
    this.title = 'Componente Hijo';
    console.log(this.title);
    console.log(this.propiedad_dos);
  }
  ngOnInit(){
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);

  }
  enviar(event){
    this.desde_el_hijo.emit({nombre: 'Emilia Casas', web:'Emilia@gmail.com'});
  }
}