import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  num = 'wa.wa.wa.wa.wa.wa.wa'.split('.');

  constructor() { }

  ngOnInit(): void {
  }

}
