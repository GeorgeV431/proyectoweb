import { Injectable } from '@angular/core';
import { Producto } from './clases/clases';
import { Cart, Boleta, Detalle } from './interfaces';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  productosCarrito:Array<Detalle> = [];
  url="http://localhost:3000/";

  //no se si esto deberia estar aqui, pero era agregarlo en este service o crear uno nuevo solo para esto
  objeto:Producto={id: 0,nombre: "", stock: 0, valor:0, categoria: ""};

  productos:Producto[]= new Array<Producto>();
  cantidades:number[]= new Array<number>();

  getProductos(){
    for (let indice = 0; indice < this.productos.length; indice++) {
      for (let index = 0; index < this.productos.length; index++) {
        if (this.productos[index].id==this.productos[indice].id && indice!=index) {
          this.productos.splice(index,1)
          this.cantidades[indice]+=this.cantidades[index];
          this.cantidades.splice(index,1)
          index--;
        }
      }
    }
    return this.productos;
  }

  getCantidades(){
    return this.cantidades;
  }

  getObjeto(){
    return this.objeto;
  }

  addObjeto(objeto:Producto){
    this.objeto=objeto;
  }

  adicionarP(producto:Producto){
    let newLength = this.productos.push(producto);
    let index = newLength - 1;
    console.log(index);
    return index;
  }

  adicionarC(cantidad:number){
    let newLength = this.cantidades.push(cantidad);
    let index = newLength - 1;
    return index;
  }

  eliminarP(id:number){
    this.productos.splice(id,1);
  }

  eliminarC(id:number){
    this.cantidades.splice(id,1);
  }

  getLengthP(){
    return this.productos.length;
  }

  getIdP(indice:number){
    return this.productos[indice].id;
  }
  modificarC(indice:number,num:number){
    this.cantidades[indice]+=num;
  }


}
