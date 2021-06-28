import { Component, OnInit, HostBinding } from '@angular/core';
//import { Usuario, Producto, Boleta, Detalle } from '../clases/clases';
import { Usuario, Producto, Boleta, Detalle } from '../interfaces';
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

  constructor(public servicio: ServicioService, public api: ApiService) { }

  ngOnInit() {
    let token = this.servicio.datos.token;

    this.api.getBoletas(token).subscribe(res=>{
      this.pedidos = res;
    });

    this.api.getUsuarios(token).subscribe(res=>{
      this.usuarios = res;
    });
  }

}
