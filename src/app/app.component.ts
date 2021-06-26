
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import {
  ViewportScroller
} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import * as AOS from 'aos';
import { UsuarioService } from './usuario.service';

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

  constructor(public fb:FormBuilder, private scroll: ViewportScroller, private router: Router, public usuarioService: UsuarioService) {
    this.ingreso = fb.group({
      correo: [''],
      contrasenia: ['']
    });


  }

  ngOnInit(): void {
    AOS.init();
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }


  onSubmit() {
    this.usuarioService.ingreso(this.ingreso.value.correo, this.ingreso.value.contrasenia);
    //alert(this.usuarioService.getNombre()+"ha ingresado");

  }


}
