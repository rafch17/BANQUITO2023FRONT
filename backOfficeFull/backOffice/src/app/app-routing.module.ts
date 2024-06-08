import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Paginas/error/error.component';
import { UsuariosComponent } from './Paginas/usuarios/usuarios.component';
import { ClientesComponent } from './Paginas/clientes/inicio/clientes.component';
import { CuentasComponent } from './Paginas/cuentas/inicio/cuentas.component';
import { CrearComponent } from './Paginas/clientes/crear/crear.component';
import { PersonaComponent } from './Paginas/clientes/crear/persona/persona.component';
import { EmpresaComponent } from './Paginas/clientes/crear/empresa/empresa.component';

import { ConsultaComponent } from './Paginas/clientes/consulta/consulta.component';
import { EditarComponent } from './Paginas/clientes/editar/editar.component';
import { EstadoComponent } from './Paginas/clientes/estado/estado.component';
import { LoginComponent } from './Paginas/login/login.component';
import { CreditosComponent } from './Paginas/creditos/creditos.component';
import { TablaAmortizacionComponent } from './Paginas/tabla-amortizacion/tabla-amortizacion.component';
import { ConsultaCuentaComponent } from './Paginas/cuentas/consulta-cuenta/consulta-cuenta.component';
import { CrearCuentaComponent } from './Paginas/cuentas/crear-cuenta/crear-cuenta.component';




const routes: Routes = [
  { path:'' , component: LoginComponent, pathMatch: 'full' },
  { path:'login' , component: LoginComponent, pathMatch: 'full' },
  { path:'usuarios' , component : UsuariosComponent},
  { path:'clientes', component: ClientesComponent},
  { path: 'clientes/crear', component: CrearComponent }, 
  { path: 'clientes/crear/persona', component: PersonaComponent }, 
  { path: 'clientes/crear/empresa', component: EmpresaComponent }, 
  { path: 'clientes/consultas', component: ConsultaComponent }, 
  { path: 'clientes/editar', component: EditarComponent }, 
  { path: 'clientes/estado', component: EstadoComponent },
  { path:'cuentas', component: CuentasComponent}, 
  { path: 'cuentas/consultas', component: ConsultaCuentaComponent }, 
  { path: 'cuentas/crear', component: CrearCuentaComponent }, 
  { path:'creditos', component: CreditosComponent}, 
  { path:'creditos/amortizacion', component: TablaAmortizacionComponent}, 
  { path:'**' , component : ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
