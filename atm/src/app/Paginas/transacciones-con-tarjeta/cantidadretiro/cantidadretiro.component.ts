import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cantidadretiro',
  templateUrl: './cantidadretiro.component.html',
  styleUrls: ['./cantidadretiro.component.css']
})
export class CantidadretiroComponent {
  numeroIdentificacion: string='';
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  cantidadRetiro: string = '';
  constructor(private router: Router) {}

  confirmarRetiro() {
    this.router.navigate(['transacciont/retiroconfirm']);
  }

  processButton(button: string): void {
    if (button === 'X') {
      this.cantidadRetiro = '';
    }
    else if (button === '✓') {
      //this.router.navigate(['tipos/depositos/identification/cuenta']);
    }
    else {
      if (this.cantidadRetiro.length == 10) {
        return;
      }
      this.cantidadRetiro += button;
    }
  }

}