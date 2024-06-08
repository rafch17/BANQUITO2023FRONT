import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-retiroconfirmct',
  templateUrl: './retiroconfirmct.component.html',
  styleUrls: ['./retiroconfirmct.component.css']
})
export class RetiroconfirmctComponent {

  constructor(private router: Router) { }

  salida() {
    this.router.navigate(['transacciont/salida']);
  }

}
