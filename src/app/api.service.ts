import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/";

  createUsuario(
    nombre:string,
    apellido:string,
    rut:string,
    direccion:string,
    comuna:string,
    region:string,
    correo:string,
    password:string,
    ):Observable<any>{
    //FORMATO DEL REQ.BODY Y FORMA DEL METODO POST
    const body = new HttpParams()
      .set("nombre",nombre)
      .set('apellido',apellido)
      .set("rut",rut)
      .set("direccion",direccion)
      .set("clave",password)
      .set("email",correo)
      .set("region",region)
      .set("comuna",comuna);

    return this.http.post(`${this.url}createUsuario`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  incioSesion(correo:string,password:string):Observable<any>{
    const body = new HttpParams()
      .set("correo",correo)
      .set("password",password);
    return this.http.post(`${this.url}login`,body.toString(),{headers:new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  getUsuarios(token:string):Observable<any>{
    let headers = new HttpHeaders();
    headers= headers.append('access-token',token);
    return this.http.get(`${this.url}getUsuarios`,{'headers':headers});
  }

  getBoletas(token:string):Observable<any>{
    let headers = new HttpHeaders();
    headers= headers.append('access-token',token);
    return this.http.get(`${this.url}getBoletas`,{'headers':headers});
  }

  getProductosCategoria(categoria:string):Observable<any>{
    return this.http.get(`${this.url}getProductosCategoria/${categoria}`);
  }

}
