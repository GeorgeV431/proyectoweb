import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  estaConectado = true;
  nombre = [''];
  id = 0;
  esAdmin = true;

  constructor() { }

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
  }

}
