import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interfaces';
import { Cliente } from '../interfaces/cliente.interfaces';
import { Compra } from '../interfaces/compra.interface';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compras:Compra[]=[];
  compra!: Compra;

  realizarCompra(codCliente:number,codArticulo:number,fecha:string,unidades:number){
    this.compra.codCliente=codCliente;
    this.compra.codArticulo=codArticulo;
    this.compra.fecha=fecha;
    this.compra.unidades=unidades;
    this.compras.push(this.compra);
  }
/**
  cliente!: Cliente;
  recibidoCliente($event){
    this.cliente=$event
  }
  articulo!: Articulo;
  recibidoArticulo($event){
    this.articulo=$event;
  }
*/

  constructor() { }

  ngOnInit(): void {
  }

}
