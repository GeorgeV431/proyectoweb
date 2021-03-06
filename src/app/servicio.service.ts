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
  getUsuarios():Observable<any> {
    //let headers = new HttpHeaders();
    //headers= headers.append('access-token',user);
    console.log(this.http.get(`${this.API_URI}/getUsuarios`));
    return this.http.get(`${this.API_URI}/getUsuarios`);
  }

  getUsuario(correo: string):Observable<any> {

    return this.http.get(`${this.API_URI}/getUsuario/${correo}`);
  }
  saveUsuario(
    nombres:string,
    apellidos:string,
    rut:string,
    direccion:string,
    comuna:string,
    region:string,
    correo:string,
    password:string):Observable<any>{

    console.log(nombres + " " + apellidos);

    const body = new HttpParams()
      .set("nombres",nombres)
      .set('apellidos',apellidos)
      .set("rut",rut)
      .set("direccion",direccion)
      .set("comuna",comuna)
      .set("region",region)
      .set("correo",correo)
      .set("password",password);

      console.log(body);
      console.log(body.toString());


      return this.http.post(`${this.API_URI}/createUsuario`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  login(correo:string,password:string):Observable<any>{
    let key:string;
    key = correo + '?' + password;
    let headers = new HttpHeaders();
    headers = headers.append('access-token',key);
    
    return this.http.post(`${this.API_URI}/login`, {'headers':headers});
  }


  // fin GET, DELETE Y POST de usuario

  // inicio GET, DELETE Y POST de producto
  getProductos() {
    return this.http.get(`${this.API_URI}/getProductos`);
  }

  getProducto(id: number) {
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }
/*
  updateProducto( ): Observable<any> {
    return this.http.put(`${this.API_URI}/producto/${id}`);
  }
  */

  // fin GET, DELETE Y POST de producto

  // inicio GET, DELETE Y POST de boleta
  getBoletas() {
    return this.http.get(`${this.API_URI}/getBoleta`);
  }
  getMaxIdBoleta():Observable<any>{
    return this.http.get(`${this.API_URI}/maxId`);
  }

  saveBoleta(
    id_usuario:string,
    total:string
  ):Observable<any> {
    console.log(id_usuario+" "+total);
      const body = new HttpParams()
      .set("id_usuario",id_usuario)
      .set("total",total);
    
    return this.http.post(`${this.API_URI}/generarBoleta`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }
  // fin GET, DELETE Y POST de boleta

  // inicio GET, DELETE Y POST de Detalle
  getDetalles() {
    return this.http.get(`${this.API_URI}/getDetalle`);
  }
 
  saveDetalle(
    id_boleta:string,
    id_producto:string,
    cantidad:string,
    subtotal:string
  ) {
    console.log(id_boleta+" "+id_producto+" "+cantidad+" "+subtotal);
    const body = new HttpParams()
      .set("id_boleta",id_boleta)
      .set("id_producto",id_producto)
      .set("cantidad",cantidad)
      .set("subtotal",subtotal);
    return this.http.post(`${this.API_URI}/generarDetalle`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')} );
  }
  // fin GET, DELETE Y POST de Detalle

  getComentario(){
    return this.http.get(`${this.API_URI}/getComentarios`);
  }
  saveComentario(
    id_producto:string,
    id_usuario:string,
    texto:string,
    calificacion:string
    ){
      console.log(id_producto+" "+id_usuario+" "+texto+" "+calificacion);
      const body = new HttpParams()
      .set("id_producto",id_producto)
      .set('id_usuario',id_usuario)
      .set("texto",texto)
      .set("calificacion",calificacion);

      return this.http.post(`${this.API_URI}/createComentario`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }
}
