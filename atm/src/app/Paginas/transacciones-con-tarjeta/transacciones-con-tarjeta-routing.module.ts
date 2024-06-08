import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';
import { InsercionTarjetaComponent } from './insercion-tarjeta/insercion-tarjeta.component';
import { CantidadretiroComponent } from './cantidadretiro/cantidadretiro.component';
import { RetiroconfirmctComponent } from './retiroconfirmct/retiroconfirmct.component';
import { ConsultasctComponent } from './consultasct/consultasct.component';



const routes: Routes = [

  { path: 'selecciont', component: SelecciontComponent},
  { path: 'salida', component: ComprobanteretiroctComponent},
  { path: 'inserciontarjeta', component: InsercionTarjetaComponent},
  { path: 'cantidadretiro', component: CantidadretiroComponent},
  { path: 'retiroconfirm', component: RetiroconfirmctComponent},
  { path: 'consultas', component: ConsultasctComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
