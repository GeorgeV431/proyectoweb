
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import * as AOS from 'aos';

import { UsuarioService } from './usuario.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  correoValid = new FormControl('', [Validators.required, Validators.email]);
  contraseniaValid = new FormControl('', [Validators.required,]);

  title = 'proyectoweb';

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }

  ingreso: FormGroup;

  constructor(public fb:FormBuilder, private scroll: ViewportScroller, private router: Router, public usuarioService: UsuarioService, public dialog: MatDialog) {
    this.ingreso = fb.group({
      correo: [''],
      contrasenia: [''],
      remember: false,
      reCaptcha: undefined,
    });


  }

  ngOnInit(): void {
    AOS.init();

    let datos = (localStorage.getItem('Usuario'));
    if (datos != null)
      this.usuarioService.cargarUsuario(JSON.parse(datos));
    
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  cerrarSesion(){

    const dialog = this.dialog.open(dialogoCerrar);
    dialog.afterClosed().subscribe(result =>{
      if (result == true) {
        this.usuarioService.desconectar();

        let datos = (localStorage.getItem('Usuario'));
        if (datos != null)
          localStorage.removeItem('Usuario');
      }
    })
  }
  getErrorMessageContrasenia() {
    if (this.contraseniaValid.hasError('required')) {
      return 'You must enter a value';
    }

    return true;
  }
  getErrorMessageCorreo() {
    if (this.correoValid.hasError('required')) {
      return 'You must enter a value';
    }
    return this.correoValid.hasError('email') ? 'Not a valid email' : true;

  }

  validInput() {
    if (this.getErrorMessageCorreo() == true && this.getErrorMessageContrasenia() == true ) {
      return true;
    }
    return false;
  }

  onSubmit():void {
    if (this.validInput()==false || grecaptcha.getResponse() == "") {
      alert("You shall not pass");
    }else
    {
      this.usuarioService.ingreso(this.correoValid.value, this.contraseniaValid.value, this.ingreso.value.remember);
    }

  }
}

@Component({
  selector: 'dialogoCerrar',
  templateUrl: 'dialogoCerrar.html'
})
export class dialogoCerrar{}
