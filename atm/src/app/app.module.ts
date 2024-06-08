import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ErrorComponent } from './Paginas/error/error.component';
import { InicioComponent } from './Paginas/login/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { CantidadretiroComponent } from './Paginas/transacciones-con-tarjeta/cantidadretiro/cantidadretiro.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    InicioComponent,
    CantidadretiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
