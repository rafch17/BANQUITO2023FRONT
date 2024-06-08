import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Bloques/navbar/navbar.component';
import { SideBarComponent} from './Bloques/sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './Paginas/error/error.component';
import { ClientesComponent } from './Paginas/clientes/inicio/clientes.component';
import { UsuariosComponent } from './Paginas/usuarios/usuarios.component';
import { CuentasComponent } from './Paginas/cuentas/inicio/cuentas.component';
import { CrearComponent } from './Paginas/clientes/crear/crear.component';
import { PersonaComponent } from './Paginas/clientes/crear/persona/persona.component';
import { ConsultaComponent } from './Paginas/clientes/consulta/consulta.component';
import { EditarComponent } from './Paginas/clientes/editar/editar.component';
import { EstadoComponent } from './Paginas/clientes/estado/estado.component';
import { LoginComponent } from './Paginas/login/login.component';
import { CreditosComponent } from './Paginas/creditos/creditos.component';
import { TablaAmortizacionComponent } from './Paginas/tabla-amortizacion/tabla-amortizacion.component';
import { EmpresaComponent } from './Paginas/clientes/crear/empresa/empresa.component';
import { ConsultaCuentaComponent } from './Paginas/cuentas/consulta-cuenta/consulta-cuenta.component';
import { CrearCuentaComponent } from './Paginas/cuentas/crear-cuenta/crear-cuenta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    UsuariosComponent,
    SideBarComponent,
    ClientesComponent,
    CuentasComponent,
    CrearComponent,
    PersonaComponent,
    ConsultaComponent,
    EditarComponent,
    EstadoComponent,
    LoginComponent,
    CreditosComponent,
    TablaAmortizacionComponent,
    EmpresaComponent,
    ConsultaCuentaComponent,
    CrearCuentaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
