import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, dialogoCerrar } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dialogClave, dialogo, FormularioComponent } from './formulario/formulario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {matTabsAnimations, MatTabsModule} from '@angular/material/tabs';
import {matExpansionAnimations, MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { TiendaComponent } from './tienda/tienda.component';
import {MatCardModule} from '@angular/material/card';
import { ProductoComponent } from './producto/producto.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AdminViewComponent,
    dialogo,
    dialogClave,
    dialogoCerrar,
    TiendaComponent,
    ProductoComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
