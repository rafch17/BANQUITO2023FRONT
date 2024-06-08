import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposTransaccionesSinTarjetaRoutingModule } from './tipos-transacciones-sin-tarjeta-routing.module';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { DepositosComponent } from './depositos/depositos.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { CuentaComponent } from './cuenta/cuenta.component';
import { CantidadComponent } from './cantidad/cantidad.component';

@NgModule({
  declarations: [
    SeleccionComponent,
    DepositosComponent,
    IdentificacionComponent,
    CuentaComponent,
    CantidadComponent
    
  ],
  imports: [
    CommonModule,
    InputMaskModule,
    TiposTransaccionesSinTarjetaRoutingModule,
    FormsModule
  ]
})
export class TiposTransaccionesSinTarjetaModule { }
