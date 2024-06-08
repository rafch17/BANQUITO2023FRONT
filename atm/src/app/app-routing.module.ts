import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Paginas/error/error.component';


const routes: Routes = [
  {
    path: 'transacciont',
    loadChildren: () => import('../app/Paginas/transacciones-con-tarjeta/transacciones-con-tarjeta.module').then(m => m.TransaccionesConTarjetaModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('../app/Paginas/tipos-transacciones-sin-tarjeta/tipos-transacciones-sin-tarjeta.module').then(m => m.TiposTransaccionesSinTarjetaModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/Paginas/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'clave',
    loadChildren: () => import('../app/Bloques/panel/panel.module').then(m => m.PanelModule)
  },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
