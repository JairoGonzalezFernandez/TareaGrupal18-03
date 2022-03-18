import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { __exportStar } from 'tslib';
import { Cliente } from '../interfaces/cliente.interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  indice:number=0;
  @Output() clientesEx = new EventEmitter<Cliente[]>();

  exportarClientes():void{
    this.clientesEx.emit(this.clientes);
  }

  nombreClienteBuscado!:string;
  clienteMostrar!:Cliente;
  clientes:Cliente[]=[
    {
      codCliente:3,
    nombre:"asd",
    apellidos:"asdasd",
    empresa:"sadas",
    puesto:"asdasd",
    cp:444,
    provincia:"aasd",
    telefono:76,
    fechaNacimiento:"sdf"
    }
  ];
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
      if(this.buscarCod==item.codCliente){
        this.clienteMostrar=item;
        this.nombreClienteBuscado=this.clienteMostrar.nombre;

      }
    }
  }

  limpiar():void{
    this.nombreClienteBuscado="";
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

  editar():void{

    for (let i = 0; i < this.clientes.length; i++) {

      if(this.clientes[i].codCliente===this.nuevo.codCliente)
       this.indice=i;
    }
    this.clientes[this.indice]=this.nuevo;

    this.nuevo={
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




  constructor() { }

  ngOnInit(): void {
  }

}
