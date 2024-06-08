import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroIdentificacion: string = '';
  constructor(private router: Router) {}

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroIdentificacion = '';
    }
    else if (button === '✓') {
      this.router.navigate(['tipos/cuenta']);
    }
    else {
      if (this.numeroIdentificacion.length == 10) {
        return;
      }
      this.numeroIdentificacion += button;
    }
  }
}