import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { ValidartarjetaService } from 'src/app/shared/validartarjeta.service';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {

  constructor(private validartarjeta: ValidartarjetaService, private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numero: string = '';
  tarjetaencontrada: String = '';
  
  printTarjeta(): void {
    console.log(this.numero);
    console.log(this.numero.replaceAll('-', ''));
  }
  
  goToClave(){
    this.router.navigate(['clave/panel-clave']);
  }

  validarTarjeta(): void {
    
   
      this.validartarjeta.validarNumeroTarjeta(this.numero)
        .subscribe(
          (data) => {
            if (!data) {
              alert('Tarjeta no encontrada. Verifique la información ingresada.')              
            } else {
              console.log('Tarjeta encontrada con éxito', data);
              this.tarjetaencontrada = data;

              this.goToClave()
              
            }
          },
          (error) => {
            console.error('Error al buscar la tarjeta', error);
          }
        );
   



  }
}
