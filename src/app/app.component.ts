import { Component, HostListener, ElementRef } from '@angular/core';
import { ViewportScroller
 } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';



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
  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }

    constructor(private scroll: ViewportScroller) { }

    ngOnInit(): void 
    {
      
    }

scrollToTop(){
  this.scroll.scrollToPosition([0,0]);
}



}
