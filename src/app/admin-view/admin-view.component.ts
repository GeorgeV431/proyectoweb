import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { ServicioService } from '../servicio.service';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {



  usuarios: any | undefined = [];
  pedidos: any | undefined = [];

  panelOpenState = false;

  constructor(public servicio: ServicioService, public api:ApiService) { }

  ngOnInit() {
  }

  getUsuarios() {
    this.servicio.getUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
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

}
