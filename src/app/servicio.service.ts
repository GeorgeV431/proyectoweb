import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, Producto, Comentarios, Boleta, Detalle } from './clases/clases';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // inicio GET, DELETE Y POST de usuario
  getUsuarios() {
    return this.http.get(`${this.API_URI}/getUsuario`);
  }
  getUsuario(rut: number) {
    return this.http.get(`${this.API_URI}/usuario/${rut}`);
  }
  deleteUsuario(rut: number) {
    return this.http.delete(`${this.API_URI}/usuario/${rut}`);
  }
  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/usuario`, usuario);
  }
  updateUsuario(rut: number, updatedUsuario: Usuario): Observable<Usuario> {
    return this.http.put(`${this.API_URI}/usuario/${rut}`, updatedUsuario);
  }
  // fin GET, DELETE Y POST de usuario

  // inicio GET, DELETE Y POST de producto
  getProductos() {
    return this.http.get(`${this.API_URI}/producto`);
  }
  getProducto(id: number) {
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }
  deleteProducto(id: number) {
    return this.http.delete(`${this.API_URI}/producto/${id}`);
  }
  saveProducto(producto: Producto) {
    return this.http.post(`${this.API_URI}/producto`, producto);
  }
  updateProducto(id: number, updatedProducto: Producto): Observable<Producto> {
    return this.http.put(`${this.API_URI}/producto/${id}`, updatedProducto);
  }
  // fin GET, DELETE Y POST de producto

  // inicio GET, DELETE Y POST de boleta
  getBoletas() {
    return this.http.get(`${this.API_URI}/boleta`);
  }
  getBoleta(id: number) {
    return this.http.get(`${this.API_URI}/boleta/${id}`);
  }
  saveBoleta(boleta: Boleta) {
    return this.http.post(`${this.API_URI}/boleta`, boleta);
  }
  // fin GET, DELETE Y POST de boleta

  // inicio GET, DELETE Y POST de Detalle
  getDetalles() {
    return this.http.get(`${this.API_URI}/detalle`);
  }
  getDetalle(id: number) {
    return this.http.get(`${this.API_URI}/detalle/${id}`);
  }
  saveDetalle(detalle: Detalle) {
    return this.http.post(`${this.API_URI}/detalle`, detalle);
  }
  // fin GET, DELETE Y POST de Detalle
}
