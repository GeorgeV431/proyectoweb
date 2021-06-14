import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  name = new FormControl('', [Validators.required,]);
  apellido = new FormControl('', [Validators.required,]);
  rut = new FormControl('', [Validators.required,]);
  direccion = new FormControl('', [Validators.required,]);
  correo = new FormControl('', [Validators.required,Validators.email]);
  contrasenya = new FormControl('', [Validators.required,]);
  cContrasenya = new FormControl('', [Validators.required,]);
  region = new FormControl('', [Validators.required,]);
  comuna = new FormControl('', [Validators.required,]);


  /*-- Nombre --*/

  getErrorMessageNombre() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Apellidos --*/
  getErrorMessageApellidos() {
    if (this.apellido.hasError('required')) {
      return 'You must enter a value';
    }

    return this.apellido.hasError('email') ? 'Not a valid email' : '';
  }
  /*-- RUT --*/
  getErrorMessageRUT() {
    if (this.rut.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Direccion --*/
  getErrorMessageDireccion() {
    if (this.direccion.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Region  --*/
  getErrorMessageRegion() {
    if (this.region.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Romuna  --*/
  getErrorMessageComuna() {
    if (this.comuna.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Correo electronico --*/
  getErrorMessageCorreo() {
    if (this.correo.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Contraseña --*/
  getErrorMessageContrasenya() {
    if (this.contrasenya.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  /*-- Confirmar Contraseña --*/
  getErrorMessageCContrasenya() {
    if (this.cContrasenya.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
