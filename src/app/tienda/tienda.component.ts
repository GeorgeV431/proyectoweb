import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  valueP = 0;
  valueR = 0;
  panelOpenState = false;

  num = '1.2.3.4.5.6.7.8.9.1.2.3.4.5.6.7.8.9.1.2.3.4.5.6.7.8.9'.split('.');

  constructor() {}



  ngOnInit(): void {
  }
  
}
