import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobanteretiroct',
  templateUrl: './comprobanteretiroct.component.html',
  styleUrls: ['./comprobanteretiroct.component.css']
})
export class ComprobanteretiroctComponent {

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['transacciont/selecciont']);
  }

}
