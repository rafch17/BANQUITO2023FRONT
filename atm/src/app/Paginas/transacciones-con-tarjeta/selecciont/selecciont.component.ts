import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selecciont',
  templateUrl: './selecciont.component.html',
  styleUrls: ['./selecciont.component.css']
})
export class SelecciontComponent implements OnInit {

  constructor(private router: Router) { }
  
  retiros() {
    this.router.navigate(['transacciont/cantidadretiro']);
  }
  consultas() {
    this.router.navigate(['transacciont/consultas']);
  }

  ngOnInit() {
  }

}
 