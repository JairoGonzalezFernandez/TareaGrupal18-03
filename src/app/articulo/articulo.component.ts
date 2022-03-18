import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interfaces';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
nombreArticuloBuscado!:string;
articuloMostrar!:Articulo;
buscarCod!:number;
mostrarTodos:boolean=false;
indice:number=0;


articulos:Articulo[]=[
  {
    codArticulo:12,
    nombre:"patata",
    descripcion:"brrr",
    precioUnidad:12,
    unidadesStock:22,
    stockSeguridad:33,
    imagen:"no hay",
  }
];


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

  mostrar():void{
    for(let item of this.articulos){
      if(this.buscarCod==item.codArticulo){
        this.articuloMostrar=item;
        this.nombreArticuloBuscado=this.articuloMostrar.nombre;

      }
    }
  }

  limpiar():void{
    this.nombreArticuloBuscado="";
  }

  mostrarTodosArticulos():void{
    if(this.mostrarTodos){
      this.mostrarTodos=false;
    }else{
      this.mostrarTodos=true;
    }
    console.log(this.mostrarTodos);
  }


  eliminar():void{
    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codArticulo===this.buscarCod)
        this.articulos.splice(i);
    }
  }

  editar():void{

    for (let i = 0; i < this.articulos.length; i++) {

      if(this.articulos[i].codArticulo===this.nuevo.codArticulo){
        this.indice=i;
      }
    }
    this.articulos[this.indice]=this.nuevo;

    this.nuevo={
      codArticulo:0,
      nombre:"",
      descripcion:"",
      precioUnidad:0,
      unidadesStock:0,
      stockSeguridad:0,
      imagen:"",
    }
  }
}
