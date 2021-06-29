import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario, Producto, Boleta, Detalle } from '../interfaces';
import { ServicioService } from '../servicio.service';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {



  //usuarios:Usuario[] = new Array<Usuario>();
  usuarios: any | undefined = [];
  pedidos: any | undefined = [];
  detalles: any | undefined = [];

  panelOpenState = false;

  constructor(public servicio: ServicioService, public api:ApiService) { }

  ngOnInit() {
    this.getUsuarios();
    this.getBoletas();
    this.getDetalles();
  }

  getUsuarios() {
    //let token = this.api.datos.token;
    this.servicio.getUsuarios()
      .subscribe(
        res => { 
          console.log(res);
          this.usuarios = res;
          console.log(this.usuarios[0]);
          //this.usuarios.push(res);
        },
        err => console.error(err)
      );
  }

  getBoletas() {
    this.servicio.getBoletas()
      .subscribe(
        res => {
          this.pedidos = res;
        },
        err => console.error(err)
      );
  }
    getDetalles() {
    this.servicio.getDetalles()
      .subscribe(
        res => {
          this.detalles = res;
        },
        err => console.error(err)
      );
  }
  isDetalle(Detalle: any, item: any){
    if (Detalle.id_boleta == item.id ) {
      return true;
    }
    return false;
  }

}

