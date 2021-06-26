import { Injectable } from '@angular/core';
import { Producto } from './clases/clases';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  objeto:Producto={id: 1,nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni"};

  productos:Producto[]= new Array<Producto>();
  cantidades:number[]= new Array<number>();

  constructor() { }

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
