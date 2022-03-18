import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interfaces';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {


articulos:Articulo[]=[];


nuevo:Articulo={

  codArticulo:0,
  nombre:"",
  descripcion:"",
  precioUnidad:0,
  unidadesStock:0,
  stockSeguridad:0,
  imagen:"",


}

  constructor() { }

  ngOnInit(): void {
  }

  agregar():void{

    if(this.nuevo.codArticulo === 0){

      return;

    }

    this.articulos.push(this.nuevo);

    this.nuevo=
    {
      codArticulo:0,
      nombre:"",
      descripcion:"",
      precioUnidad:0,
      unidadesStock:0,
      stockSeguridad:0,
      imagen:"",
    }

  }



    //this.onNuevoCliente.emit(this.nuevo);

    //this.servicio.agregarPersonaje(this.nuevo);

}
