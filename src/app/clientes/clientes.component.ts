import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteMostrar!:Cliente;
  clientes:Cliente[]=[];
  buscarCod!:number;
  mostrarTodos:boolean=false;

  nuevo:Cliente={
    codCliente:0,
    nombre:"",
    apellidos:"",
    empresa:"",
    puesto:"",
    cp:0,
    provincia:"",
    telefono:0,
    fechaNacimiento:""
  }

  agregar():void{
    if(this.nuevo.codCliente === 0){
      return;
    }

    //this.onNuevoCliente.emit(this.nuevo);
    //this.servicio.agregarPersonaje(this.nuevo);
    this.clientes.push(this.nuevo);

    this.nuevo = {
      codCliente:0,
      nombre:"",
      apellidos:"",
      empresa:"",
      puesto:"",
      cp:0,
      provincia:"",
      telefono:0,
      fechaNacimiento:""
    }
  }

  mostrar():void{
    for(let item of this.clientes){
      if(this.buscarCod===item.codCliente){
        this.clienteMostrar=item;

      }
    }
  }

  mostrarTodosCliente():void{
    if(this.mostrarTodos){
      this.mostrarTodos=false;
    }else{
      this.mostrarTodos=true;
    }
    console.log(this.mostrarTodos);
  }

  eliminar():void{
    for (let i = 0; i < this.clientes.length; i++) {
      if(this.clientes[i].codCliente===this.buscarCod)
        this.clientes.splice(i);
    }
  }

  limpiar():void{
    this.clienteMostrar.nombre="";
  }

  constructor() { }

  ngOnInit(): void {
  }

}