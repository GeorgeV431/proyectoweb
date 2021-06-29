import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { Usuario, Producto, Comentarios, Boleta, Detalle } from '../clases/clases';
import { ServicioService } from '../servicio.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  hidden = true;
  total=0;

  producto: Producto = { id: 1, nombre: "Shiba1", stock: 10, valor: 3000, categoria: "Pepperonni" };
  cantidad: number = 1;;

  comentarios:any;

  valoracion = 2;
  stars = ''.split('.');

  comentario: FormGroup;

  constructor(public fb: FormBuilder, private cartService: CartService, public usuarioService: UsuarioService, public servicio:ServicioService) {

    switch (this.valoracion) {
      case 1:
        this.stars = '1'.split('.');
        break;
      case 2:
        this.stars = '1.2'.split('.');
        break;
      case 3:
        this.stars = '1.2.3'.split('.');
        break;
      case 4:
        this.stars = '1.2.3.4'.split('.');
        break;
      case 5:
        this.stars = '1.2.3.4.5'.split('.');
        break;
      default:
        this.stars = ''.split('.');
        break;
    }

    this.comentario = fb.group({
      puntaje: 0,
      comentario: ['']
    });

  }
  not0() {
    if (this.valoracion >= 1) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {

    this.producto = this.cartService.getObjeto();
    this.servicio.getComentario()
      .subscribe(
        res => {
          this.comentarios = res;
        },
        err => console.error(err)
      );
  }

  onSubmit(){
    
    this.comentarios.push(
      {id: (this.comentarios.length),id_producto: this.producto.id, id_usuario: (this.usuarioService.getId()), texto: this.comentario.value.comentario }
    )
    console.log(this.comentarios);
    this.servicio.saveComentario("this.producto.id", this.usuarioService.getId(), this.comentario.value.comentario, this.comentario.value.puntaje );
  }

  addCart() {
    this.cartService.adicionarP(this.producto);
    this.cartService.adicionarC(this.cantidad);
    
    if (this.cartService.getLengthP()==1) {
      this.toggleBadgeVisibility();
    }
    this.total=this.cartService.getLengthP();
  }
  stock(){
    if (this.producto.stock==0) {
      return false;
    }else{
      return true;
    }
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
