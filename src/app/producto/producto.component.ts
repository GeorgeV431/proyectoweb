import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  num = '1.2.3'.split('.');

  constructor() { }

  ngOnInit(): void {
  }

}
