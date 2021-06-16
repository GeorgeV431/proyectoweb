import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  //esto es temporal para visualizar como sera
  usuarios= 'awebo,pium,fium,wom,alo,wenas,tardes'.split(',');
  pedidos= 'awebo,pium,fium,wom,alo,wenas,tardes'.split(',');
  
  //esto es como deberia ser 
  //usuarios: any[] | undefined ;
  //pedidos: any[] | undefined ;

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
