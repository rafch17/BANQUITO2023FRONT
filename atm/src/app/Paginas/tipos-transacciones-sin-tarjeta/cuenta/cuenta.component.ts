import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroCuenta: string = '';
  constructor(private router: Router) {}

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroCuenta = '';
    }
    else if (button === '✓') {
      this.router.navigate(['tipos/cantidad']);
    }
    else {
      if (this.numeroCuenta.length == 10) {
        return;
      }
      this.numeroCuenta += button;
    }
    
  }
}
