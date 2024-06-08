import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InsercionTarjetaComponent } from './insercion-tarjeta/insercion-tarjeta.component';
import { TransaccionesConTarjetaRoutingModule } from './transacciones-con-tarjeta-routing.module';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';
import { RetiroconfirmctComponent } from './retiroconfirmct/retiroconfirmct.component';
import { ConsultasctComponent } from './consultasct/consultasct.component';

@NgModule({
  declarations: [
    InsercionTarjetaComponent,
    ComprobanteretiroctComponent,
    RetiroconfirmctComponent,
    ConsultasctComponent

  ],
  imports: [
    CommonModule,
    TransaccionesConTarjetaRoutingModule,
    InputNumberModule,
    FormsModule,
    InputMaskModule,
    ButtonModule
  ]
})
export class TransaccionesConTarjetaModule { }
