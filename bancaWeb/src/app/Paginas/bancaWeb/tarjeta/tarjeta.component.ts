import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { TarjetaService } from 'src/app/Servicios/tarjeta.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  cuentasAhorro: any[] = [];
  cuentaId: string = '';

  constructor(private router: Router, private productosService: ProductosService, private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      const codCliente = usuario.codCliente;
      console.log(codCliente); // Esto mostrará el codCliente en la consola
      this.obtenerCuentasAhorro(codCliente);
    }
    
  }

  obtenerCuentasAhorro(codCliente: any) {
    this.productosService.obtenerCuentasAhorro(codCliente).subscribe(
      (data) => {
        this.cuentasAhorro = data;
      },
      (error) => {
        console.error('Error obteniendo cuentas de ahorro', error);
      }
    );
  }

  generarTarjeta() {
    if (this.cuentaId) {
      this.tarjetaService.generarTarjeta(this.cuentaId).subscribe(
        (data) => {
          
          console.log('Tarjeta generada correctamente', data);
        },
        (error) => {
          console.error('Error generando tarjeta', error);
        }
      );
    } else {
      
      console.warn('Selecciona una cuenta antes de continuar');
    }
  }

  cancelar() {
    
    this.router.navigate(['/otra-ruta']);
  }
}