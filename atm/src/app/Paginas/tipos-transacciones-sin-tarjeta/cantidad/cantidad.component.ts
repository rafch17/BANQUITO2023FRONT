import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cantidad',
  templateUrl: './cantidad.component.html',
  styleUrls: ['./cantidad.component.css']
})
export class CantidadComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroCantidad: string = '';
  constructor(private router: Router) {}

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroCantidad = '';
    }
    else if (button === '✓') {
      this.router.navigate(['tipos/cantidad']);
    }
    else {
      if (this.numeroCantidad.length == 10) {
        return;
      }
      this.numeroCantidad += button;
    }
  }
}
