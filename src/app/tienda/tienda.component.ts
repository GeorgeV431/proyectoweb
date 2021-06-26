import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { CartService } from "../cart.service"

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
    { id: 1, nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni" },
    { id: 2, nombre: "Shiba2", stock: 10, valor: 1000, categoria: "Mushroom" },
    { id: 3, nombre: "Shiba3", stock: 10, valor: 5000, categoria: "Extra Cheese" },
    { id: 4, nombre: "Shiba4", stock: 10, valor: 9000, categoria: "Pepperonni" },
    { id: 5, nombre: "Shiba5", stock: 10, valor: 8000, categoria: "Mushroom" },
    { id: 6, nombre: "Shiba6", stock: 10, valor: 1000, categoria: "Extra Cheese" },
    { id: 7, nombre: "Shiba7", stock: 10, valor: 9000, categoria: "Mushroom" },
    { id: 8, nombre: "Shiba8", stock: 10, valor: 7000, categoria: "Pepperonni" },
    { id: 9, nombre: "Shiba9", stock: 10, valor: 9000, categoria: "Extra Cheese" },
    { id: 10, nombre: "Shiba10", stock: 10, valor: 5000, categoria: "Mushroom" },

  ];
  cantidades: number[] = Array<number>();

  filtro: FormGroup;


  constructor(public fb: FormBuilder, private router: Router, private cartService: CartService) {
    this.filtro = fb.group({
      categoria: [""],
      priceMin: 0,
      priceMax: 10000,
      rating: 0
    });

  }

  ngOnInit(): void {
    for (let index = 0; index < this.num.length; index++) {
      this.cantidades.push(1);
    }
  }

  addCart(indice: number) {
    this.cartService.adicionarP(this.num[indice]);
    this.cartService.adicionarC(this.cantidades[indice]);

  }


  reset() {
    this.filtro = this.fb.group({
      categoria: [""],
      priceMin: 0,
      priceMax: 10000,
      rating: 0,
    })
  }

  show = true;
  onSubmit() {
    console.log(this.filtro.value)
  }

  revisar(item: Producto) {

    let result = 3;
    let flagCategoria = false, flagMin = false, flagMax = false;

    if (this.filtro.value.categoria === "") {
      result--;
      flagCategoria = true;
    }
    if (this.filtro.value.priceMin == -1) {
      result--;
      flagMin = true;
    }
    if (this.filtro.value.priceMax == -1) {
      result--;
      flagMax = true;
    }

    if (result == 0) return true;

    result = 3;
    if (flagCategoria || item.categoria === this.filtro.value.categoria)
      result--

    if (flagMin || (item.valor != undefined && this.filtro.value.priceMin <= item.valor))
      result--

    if (flagMax || (item.valor != undefined && this.filtro.value.priceMax >= item.valor))
      result--

    if (result == 0) return true;
    else
      return false;
  }
  vistaProducto(indice: number) {
    this.cartService.addObjeto(this.num[indice]);
    this.router.navigateByUrl('/producto');
  }

}
