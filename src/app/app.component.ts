import { Component, HostListener, ElementRef } from '@angular/core';
import {
  ViewportScroller
} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



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

  constructor(private scroll: ViewportScroller, private router: Router) { }

  ngOnInit(): void {

  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }


  onSubmit() {

    this.router.navigateByUrl('/producto');
  }


}
