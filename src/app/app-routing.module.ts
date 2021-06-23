import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import {FormularioComponent} from "../app/formulario/formulario.component"
import {AdminViewComponent} from "../app/admin-view/admin-view.component"
import {TiendaComponent} from "../app/tienda/tienda.component"
import {ProductoComponent} from "../app/producto/producto.component"
import {ShoppingCartComponent} from "../app/shopping-cart/shopping-cart.component"
=======
import { FormularioComponent } from "../app/formulario/formulario.component"
import { AdminViewComponent } from "../app/admin-view/admin-view.component"
>>>>>>> Stashed changes

const routes: Routes = [
  {path:"registro",component:FormularioComponent},
  {path:"admin",component:AdminViewComponent},
  {path:"",component:TiendaComponent},
  {path:"producto",component:ProductoComponent},
  {path:"cart",component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
