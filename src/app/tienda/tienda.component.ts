import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  valuePMax = 0;
  valuePMin = 0;
  valueR = 0;
  panelOpenState = false;
  
  num: Array<Producto> = [
    {nombre: "Shiba1", stock: 10, valor: 30000, categoria: "Pepperonni"},
    {nombre: "Shiba2", stock: 10, valor: 10000, categoria: "Mushroom"},
    {nombre: "Shiba3", stock: 10, valor: 50000, categoria: "Extra Cheese"},
    {nombre: "Shiba4", stock: 10, valor: 90000, categoria: "Pepperonni"},
    {nombre: "Shiba5", stock: 10, valor: 80000, categoria: "Mushroom"},
    {nombre: "Shiba6", stock: 10, valor: 10000, categoria: "Extra Cheese"},
    {nombre: "Shiba7", stock: 10, valor: 90000, categoria: "Mushroom"},
    {nombre: "Shiba8", stock: 10, valor: 70000, categoria: "Pepperonni"},
    {nombre: "Shiba9", stock: 10, valor: 90000, categoria: "Extra Cheese"},
    {nombre: "Shiba10", stock: 10, valor: 50000, categoria: "Mushroom"},

  ];

  filtro:FormGroup;

  constructor(public fb:FormBuilder) {
    this.filtro = fb.group({
      categoria: [""],
      priceMin: -1,
      priceMax: -1,
      rating: 0
    });

  }


  ngOnInit(): void {
  }

  show = true;
  onSubmit(){
    console.log(this.filtro.value)
  }
  revisar(item:Producto){
    
    let result = 3;
    let flagCategoria = false, flagMin = false, flagMax = false;

    if(this.filtro.value.categoria === ""){
      result--;
      flagCategoria = true;
    }
    if(this.filtro.value.priceMin == -1){
      result--;
      flagMin = true;
    }
    if(this.filtro.value.priceMax == -1){
      result--;
      flagMax = true;
    }
    
    if(result == 0) return true;

    result = 3;
    if( flagCategoria || item.categoria === this.filtro.value.categoria)
      result--
    
    if( flagMin || (item.valor != undefined && this.filtro.value.priceMin <= item.valor) )
      result--
    
    if( flagMax || (item.valor != undefined && this.filtro.value.priceMax >= item.valor) )
      result--

    if(result == 0) return true;
    else
      return false;
  }
  
}
