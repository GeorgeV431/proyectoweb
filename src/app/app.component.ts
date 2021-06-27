
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import {
  ViewportScroller
} from '@angular/common';
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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


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
  onSubmit() {
    this.usuarioService.ingreso(this.ingreso.value.correo, this.ingreso.value.contrasenia, this.ingreso.value.remember);
    
    this.ingreso = this.fb.group({
      correo: [''],
      contrasenia: [''],
      remember: false,
    });
  }


}

@Component({
  selector: 'dialogoCerrar',
  templateUrl: 'dialogoCerrar.html'
})
export class dialogoCerrar{}
