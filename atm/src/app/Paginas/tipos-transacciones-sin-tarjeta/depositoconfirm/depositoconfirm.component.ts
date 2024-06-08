import { Component } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { BuscarCuenta } from 'src/app/shared/interfaces/buscarcuenta';

@Component({
  selector: 'app-depositoconfirm',
  templateUrl: './depositoconfirm.component.html',
  styleUrls: ['./depositoconfirm.component.css']
})
export class DepositoconfirmComponent {
  constructor(private buscarcuentaservice: BuscarcuentaService) {

  }
  BuscarCuenta(id: string) {
    this.buscarcuentaservice.burcarcuenta(id).subscribe({
      next: (response) => {
        const data: BuscarCuenta = response;
        console.log(data);
      }

    });

  }

}
