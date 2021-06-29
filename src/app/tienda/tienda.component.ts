import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NumberValueAccessor } from '@angular/forms';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { CartService } from "../cart.service"
import { ServicioService } from '../servicio.service';

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
  total=0;
  hidden = true;
  fontStyleControl = new FormControl();
  fontStyle?: string;
  


  num: any;
  cantidades: number[] = Array<number>();

  filtro: FormGroup;


  constructor(public fb: FormBuilder, private router: Router, private cartService: CartService, private servicio: ServicioService) {
    this.filtro = fb.group({
      categoria: [""],
      priceMin: 0,
      priceMax: 10000,
      rating: 0,
      stock: false
    });

  }

  ngOnInit(): void {
    this.servicio.getProductos()
      .subscribe(
        res => {
          this.num = res;
        },
        err => console.error(err)
      );

    for (let index = 0; index < this.num.length; index++) {
      this.cantidades.push(1);
    }
    if (this.cartService.getLengthP()>=1) {
      this.toggleBadgeVisibility();
    }
    this.total=this.cartService.getLengthP();
  }

  addCart(indice: number) {
    this.cartService.adicionarP(this.num[indice]);
    this.cartService.adicionarC(this.cantidades[indice]);
    
    if (this.cartService.getLengthP()==1) {
      this.toggleBadgeVisibility();
    }
    this.total=this.cartService.getLengthP();
  }

  reset() {
    this.filtro = this.fb.group({
      categoria: [""],
      priceMin: 0,
      priceMax: 10000,
      rating: 0,
      stock: false
    })
  }

  show = true;
  onSubmit() {
    console.log(this.filtro.value)
  }

  revisar(item:any) {

    let result = 4;
    let flagCategoria = false, flagMin = false, flagMax = false, flagStock=false;

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
    if (this.filtro.value.stock == false) {
      result--;
      flagStock = true;
    }

    if (result == 0) return true;

    result = 4;
    if (flagCategoria || item.categoria === this.filtro.value.categoria)
      result--

    if (flagMin || (item.valor != undefined && this.filtro.value.priceMin <= item.valor))
      result--

    if (flagMax || (item.valor != undefined && this.filtro.value.priceMax >= item.valor))
      result--

    if (flagStock || (item.stock != 0 ))
      result--

    if (result == 0) return true;
    else
      return false;
  }

  vistaProducto(indice: number) {
    this.cartService.addObjeto(this.num[indice]);
    this.router.navigateByUrl('/producto');
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  stock(item:Producto){
    if (item.stock==0) {
      return false;
    }else{
      return true;
    }
  }

}
