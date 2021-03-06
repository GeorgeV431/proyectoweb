import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  localStorageService;
  sessionStorageService;
  constructor(){
    this.localStorageService = localStorage;
    this.sessionStorageService = sessionStorage;
  }

  rawDatos:string ="";
  datos = {
    token:"",
    email:"",
    admin:2
  };

  cargarDatos(token:string,email:string,admin:number){
    console.log("cargar datos");
    let datos = {
      token:`${token}`,
      email:`${email}`,
      admin:admin
    }
    console.log(datos);
    this.localStorageService.setItem('sesion', JSON.stringify(datos));
    this.datos = datos;
  }

  borrarDatos(){
    console.log('borrar datos');
    this.localStorageService.removeItem('sesion');
    this.datos = {
      token:'',
      email:'',
      admin:2
    }
    this.borrarDatosSession();
  }

  getDatos(){
    if(localStorage.getItem("sesion")!=null){
      this.rawDatos = localStorage.getItem('sesion')!;
      this.datos = JSON.parse(this.rawDatos);
    }else{
      console.log("no hay datos");
    }
  }

  //--------------SESION STORAGE-----------------------

  cargarDatosSession(token:string, email:string, admin:number){
    console.log("SESSION STORAGE");
      let datos ={
        token:`${token}`,
        email:`${email}`,
        admin:admin
      }
      this.sessionStorageService.setItem('sesion',JSON.stringify(datos));
      this.datos=datos;
  }

  borrarDatosSession(){
    this.sessionStorageService.removeItem('sesion');
    this.datos={
      token:'',
      email:'',
      admin:2
    }
  }
}