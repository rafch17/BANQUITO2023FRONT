import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelclave',
  templateUrl: './panelclave.component.html',
  styleUrls: ['./panelclave.component.css']
})
export class PanelclaveComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroClave: string = '';
  constructor(private router: Router) {}

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroClave = '';
    }
    else if (button === '✓') {
      //this.router.navigate(['tipos/depositos/identification/cuenta']);
    }
    else {
      if (this.numeroClave.length == 10) {
        return;
      }
      this.numeroClave+= button;
    }
  }

  seleccionCt() {
    this.router.navigate(['transacciont/selecciont']);
  }

}
