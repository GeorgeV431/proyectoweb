import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { ServicioService } from '../servicio.service';
import { CartService } from "../cart.service"
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  total:number=0;

  cantidades: number[] = new Array<number>();


  productos: Producto[] = new Array<Producto>();


  constructor(private cartService: CartService,private servicio: ServicioService, public dialog: MatDialog, private router: Router, public usuario: UsuarioService) {

  }

  ngOnInit(): void {
    this.productos = this.cartService.getProductos();
    this.cantidades = this.cartService.getCantidades();
    this.suma();
  }

  suma(){
    for (let index = 0; index < this.productos.length; index++) {
      if ( this.productos != undefined && this.productos[index].valor != undefined && this.productos[index] != undefined ){
        this.total += this.productos[index].valor * this.cantidades[index];
      }
    }
  }

  delete(indice: any) {
    console.log(indice);
    this.cartService.eliminarP(indice);
    this.cartService.eliminarC(indice);
  }

  submitCart(){
    this.suma();
    this.servicio.saveBoleta(this.usuario.getId(), this.total.toString()).subscribe(datos=>{
      console.log(datos)
      /*
      for (let index = 0; index < this.productos.length; index++) {
        let aux:number;
        let id:string = datos;
        console.log(datos[0]);
        aux = this.productos[index].valor * this.cantidades[index];
        this.servicio.saveDetalle(datos.id, this.productos[index].id.toString(), this.cantidades[index].toString(), aux.toString()).subscribe(datos=>{
          console.log(datos)});
      }
      */
    });
    
    this.servicio.getMaxIdBoleta().subscribe(datos=>{
      console.log("Hola");
      console.log(this.productos);
      for (let index = 0; index < this.cartService.getLengthP(); index++) {
        console.log(this.productos[index].id.toString());
        let aux:number;
        aux = this.productos[index].valor * this.cantidades[index];
        this.servicio.saveDetalle(datos[0].id, this.productos[index].id.toString(), this.cantidades[index].toString(), aux.toString()).subscribe(datos=>{
          console.log(datos)});
      }
    }); 

    this.dialog.open(dialogo);
    this.router.navigateByUrl('/');
  }

}
@Component({
  selector: 'dialogo',
  templateUrl: 'dialogo.html',
})
export class dialogo { }
