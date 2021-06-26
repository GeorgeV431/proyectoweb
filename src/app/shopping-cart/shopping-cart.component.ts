import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { CartService } from "../cart.service"

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cantidades: number[] = new Array<number>();


  productos: Producto[] = new Array<Producto>();

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.productos = this.cartService.getProductos();
    this.cantidades = this.cartService.getCantidades();

  }

  delete(indice: any) {
    console.log(indice);
    this.cartService.eliminarP(indice);
    this.cartService.eliminarC(indice);
  }


}
