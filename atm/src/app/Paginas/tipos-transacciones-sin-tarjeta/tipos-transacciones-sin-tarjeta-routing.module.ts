import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { DepositosComponent } from './depositos/depositos.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { CantidadComponent } from './cantidad/cantidad.component';
import { DepositoconfirmComponent } from './depositoconfirm/depositoconfirm.component';
import { ComprobantedepositostComponent } from './comprobantedepositost/comprobantedepositost.component';

const routes: Routes = [
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'depositos', component: DepositosComponent, },
  { path: 'identificacion', component: IdentificacionComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'cantidad', component: CantidadComponent },
  { path: 'depositoconfirm', component: DepositoconfirmComponent },
  { path: 'comprobantedepositos', component: ComprobantedepositostComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposTransaccionesSinTarjetaRoutingModule { }
