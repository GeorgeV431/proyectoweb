import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  valueP = 0;
  valueR = 0;
  panelOpenState = false;

  num: Array<Producto> = [
    {nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni"},
    {nombre: "Shiba3", stock: 10, valor: 1000, categoria: "Mushroom"},
    {nombre: "Shiba2", stock: 10, valor: 5000, categoria: "Extra Cheese"},
    {nombre: "Shiba4", stock: 10, valor: 9000, categoria: "Pepperonni"},
    {nombre: "Shiba5", stock: 10, valor: 8000, categoria: "Mushroom"},
    {nombre: "Shiba6", stock: 10, valor: 10000, categoria: "Extra Cheese"},
    {nombre: "Shiba7", stock: 10, valor: 9000, categoria: "Mushroom"},
    {nombre: "Shiba8", stock: 10, valor: 7000, categoria: "Pepperonni"},
    {nombre: "Shiba9", stock: 10, valor: 9000, categoria: "Extra Cheese"},
    {nombre: "Shiba10", stock: 10, valor: 5000, categoria: "Mushroom"},

  ];

  filtro:FormGroup;

  constructor(public fb:FormBuilder) {
    this.filtro = fb.group({
      checkbox:[''],
      price: -1,
      rating: 0,
    });

  }



  ngOnInit(): void {
  }

  show = true;
  onSubmit(){
    this.show = false;

  }
  
}
