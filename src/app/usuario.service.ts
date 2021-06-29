import { Injectable } from '@angular/core';
import { ServicioService } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  estaConectado = false;
  nombre = "";
  id = 0;
  esAdmin = true;

  constructor(private servicio:ServicioService) { }

  getEstado(){
    return this.estaConectado;
  }
  getNombre(){
    return this.nombre;
  }
  getId(){
    return this.id;
  }

  conectar(){
    this.estaConectado = true;
  }

  desconectar(){
    this.estaConectado = false;
    this.nombre = "";
    this.id = 0;
    this.esAdmin = false;
  }

  ingreso(correo:string, contrasenia:string, recordar:boolean){
  
    this.servicio.getUsuario(correo)
      .subscribe(
        res => {
          console.log(JSON.stringify(res));
        }

      );

    this.conectar();
    

    if(recordar){
      localStorage.setItem('Usuario',JSON.stringify({
        "estaConectado": this.estaConectado,
        "nombre": this.nombre,
        "id": this.id,
        "esAdmin": this.esAdmin
      }))
    }
  }

  cargarUsuario(datos:any){
    this.estaConectado = datos.estaConectado;
    this.nombre = datos.nombre;
    this.id = datos.id;
    this.esAdmin = datos.esAdmin;
  }

}
