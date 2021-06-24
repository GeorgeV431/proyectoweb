import { Component, OnInit } from '@angular/core';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  delete(indice:any) {
    console.log(indice);
    this.num.splice(indice, 1);
    }

  num: Array<Producto> = [
    {nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni"},
    {nombre: "Shiba2", stock: 10, valor: 1000, categoria: "Mushroom"},
    {nombre: "Shiba3", stock: 10, valor: 5000, categoria: "Extra Cheese"},
    {nombre: "Shiba4", stock: 10, valor: 9000, categoria: "Pepperonni"},
    {nombre: "Shiba5", stock: 10, valor: 8000, categoria: "Mushroom"},
    {nombre: "Shiba6", stock: 10, valor: 10000, categoria: "Extra Cheese"},
    {nombre: "Shiba7", stock: 10, valor: 9000, categoria: "Mushroom"},
    {nombre: "Shiba8", stock: 10, valor: 7000, categoria: "Pepperonni"},
    {nombre: "Shiba9", stock: 10, valor: 9000, categoria: "Extra Cheese"},
    {nombre: "Shiba10", stock: 10, valor: 5000, categoria: "Mushroom"},

  ];

  constructor() {

   }

  ngOnInit(): void {

  }
  
}
