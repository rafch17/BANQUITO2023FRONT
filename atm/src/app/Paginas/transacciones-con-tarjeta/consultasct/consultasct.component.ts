import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultasct',
  templateUrl: './consultasct.component.html',
  styleUrls: ['./consultasct.component.css']
})
export class ConsultasctComponent {
  constructor(private router: Router) { }

  regresar() {
    this.router.navigate(['transacciont/selecciont']);
  }
}
