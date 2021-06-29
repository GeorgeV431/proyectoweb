import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
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
    //let headers = new HttpHeaders();
    //headers= headers.append('access-token',user);
    console.log(this.http.get(`${this.API_URI}/getUsuarios`));
    return this.http.get(`${this.API_URI}/getUsuarios`);
  }

  getUsuario(correo: string):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('access-token',correo);
    return this.http.get(`${this.API_URI}/getUsuario`, {'headers':headers});
  }
  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/createUsuario`, usuario);
  }

  login(correo:string,password:string):Observable<any>{
    const body = new HttpParams()
      .set("email",correo)
      .set("clave",password);

    return this.http.post(`${this.API_URI}inicioSesion`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  // fin GET, DELETE Y POST de usuario

  // inicio GET, DELETE Y POST de producto
  getProductos() {
    return this.http.get(`${this.API_URI}/getProductos`);
  }
  getProducto(id: number) {
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }
  updateProducto(id: number, updatedProducto: Producto): Observable<Producto> {
    return this.http.put(`${this.API_URI}/producto/${id}`, updatedProducto);
  }
  // fin GET, DELETE Y POST de producto

  // inicio GET, DELETE Y POST de boleta
  getBoletas() {
    return this.http.get(`${this.API_URI}/getBoleta`);
  }

  saveBoleta(boleta: Boleta) {
    return this.http.post(`${this.API_URI}/generarBoleta`, boleta);
  }
  // fin GET, DELETE Y POST de boleta

  // inicio GET, DELETE Y POST de Detalle
  getDetalles() {
    return this.http.get(`${this.API_URI}/getDetalle`);
  }
 
  saveDetalle(detalle: Detalle) {
    return this.http.post(`${this.API_URI}/detalle`, detalle);
  }
  // fin GET, DELETE Y POST de Detalle
}
